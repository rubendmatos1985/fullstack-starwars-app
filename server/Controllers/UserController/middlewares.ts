import { Request, Response, NextFunction } from "express";
import { RequestWithUserData } from ".";
import { UserValidators } from "./validators";
import { EmailServiceProvider } from "../../services/Email";
import { IDBResponse } from "../../DB";
import { IUserEntity } from "../../models/User";
import { Status } from "../../middlewares/helpers";
import UserRepository from '../../models/UserRepository'
import { EncryptPassword } from "./helpers";

export async function ValidateUserInput(req: RequestWithUserData, res: Response, next: NextFunction) {
    const { error } = UserValidators.SignInData(req)
    if (error) {
      return res
        .status(403)
        .send({ status: "Error", message: error.details.map(v => v.message) })
    }
    next()
  }
  
  export async function HandleSendSignInEmail(req: RequestWithUserData, res: Response, next: NextFunction) {
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

  export async function HandleCreateUser(req: Request, res: Response, next: NextFunction): Promise<Response> {
    const user: IDBResponse<IUserEntity[]> = await UserRepository.getByEmail(req.body.email)
    if (user.status === Status.Successfull) {
      return res
        .status(404)
        .send({ status: "Error", message: `user with email ${req.body.email} already exists` })
    }
    try {
      const { email, name } = req.body;
      const password = await EncryptPassword(req.body.password)
      const newUser: IUserEntity = await UserRepository.create({ name, email, password })
      req.body.apiKey = newUser.api_key
      next();
    } catch (e) {
      console.log(e)
      return res
        .status(404)
        .json({ status: Status.Error, message: "Sorry, we are having problems to process your request" })
    }
  }

  