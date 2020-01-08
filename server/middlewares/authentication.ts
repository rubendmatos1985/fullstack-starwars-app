import { Request, Response, NextFunction } from 'express';
import { Status } from './helpers';
import User from '../models/UserRepository';
import { UserFields } from '../models/User';

export namespace Authentication {
  export const CheckUserIsLogged = (req: Request, res: Response, next: NextFunction) => {
    // TO DO
    next();
  }
  export const CheckKeyIsProvided = (req: Request, res: Response, next: NextFunction) =>
    req.query.apiKey
      ? next()
      : res.send({ status: 'error', message: 'You must provide an api key' })
  
  export async function ValidateKey(req: Request, res: Response, next: NextFunction): Promise<void> {
    const dbResponse: any = await User.getByApiKey(req.query.apiKey)
    if (dbResponse.status === Status.Successfull) {
      next();
    } else {
      res.json({ status: 'error', message: 'You need a valid api key. Sign in to receive one' })
    }
  }
  export async function UpdateUserStatus(req: Request, res: Response, next: NextFunction){
    await User.updateUserLastConexion(req.query.apiKey)
    next()
  }
}