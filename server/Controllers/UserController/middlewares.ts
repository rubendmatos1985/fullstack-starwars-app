import { Request, Response, NextFunction } from "express";
import { RequestWithUserData } from ".";
import { UserValidators } from "./validators";
import { EmailServiceProvider } from "../../services/Email";
import { IDBResponse } from "../../DB";
import { IUserEntity } from "../../models/User";
import { Status } from "../../middlewares/helpers";
import UserRepository from '../../models/UserRepository'
import { EncryptPassword } from "./helpers";
import bcrypt from 'bcrypt';
export async function ValidateUserInput(req: RequestWithUserData, res: Response, next: NextFunction) {
    const { error } = UserValidators.SignInData(req)
    if (error) {
      return res
        .status(403)
        .send({ status: "Error", message: error.details.map(v => v.message) })
    }
    next()
  }
  
  export async function SendSignInEmail(req: RequestWithUserData, res: Response, next: NextFunction) {
    try {
      const { apiKey, email } = req.body
      await EmailServiceProvider.SendApiKeyEmail(apiKey, email)
      return next()
    } catch (e) {
      console.log(e)
      return res.status(404).send({
        status: "Error",
        message: "We had problems sending the email with your api_key. Please verify your email address"
      })
    }
  }

  export async function VerifyUserAlreadyExists(req: Request, res: Response, next: NextFunction): Promise<Response|void>{
    const user: IDBResponse<IUserEntity[]> = await UserRepository.getByEmail(req.body.email)
    if (user.status === Status.Successfull) {
      return res
        .status(404)
        .send({ status: "Error", message: `user with email ${req.body.email} already exists` })
    }
    return next()
  }

export async function HandleUpdateUserValidation(req: Request, res: Response, next: NextFunction){
  const fail = ()=> res.status(404).send({status: Status.Error, message: "your password or email is not valid"}) 
  const dbUser:IDBResponse<IUserEntity[]> = await UserRepository.getByApiKey(req.query.apiKey)
  if(dbUser.status === Status.Successfull){
    const passwordIsValid:boolean = await bcrypt.compare(req.body.password, dbUser.message[0].password)
    const emailIsValid: boolean = UserValidators.SafeCompare(dbUser.message[0].email, req.body.email)
    if(passwordIsValid && emailIsValid){
      return next()
    }
     return fail()
    
  }else{
    return fail()
  }
}
  