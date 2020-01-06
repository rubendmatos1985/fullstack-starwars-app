import { Request, Response, NextFunction } from 'express';
import { Status } from './helpers';
import User from '../models/User';
import { UserFields } from '../types/interfaces/User';

export namespace Authentication {
  export const CheckUserIsLogged = (req: Request, res: Response, next: NextFunction) => {

    console.log("User is Logged");
    console.log("Giving access");

    next();
  }
  export const CheckKeyIsProvided = (req: Request, res: Response, next: NextFunction) =>
    req.query.apiKey
      ? next()
      : res.send({ status: 'error', message: 'You must provide an api key' })
  
  export async function ValidateKey(req: Request, res: Response, next: NextFunction): Promise<void> {
    const dbResponse: any = await User.getByField(UserFields.ApiKey)(req.query.apiKey)
    if (dbResponse.status === Status.Successfull) {
      next();
    } else {
      res.json({ status: 'error', message: 'You need a valid api key. Sign in to receive one' })
    }
  }
  export async function UpdateUserStatus(req: Request, res: Response, next: NextFunction){
    await User.update({ 
      field: UserFields.LastConexion, 
      value: new Date(),  
      where: { [UserFields.ApiKey]: req.query.apiKey },
      returning: [UserFields.Email, UserFields.LastConexion]
    })
    next()
  }
}