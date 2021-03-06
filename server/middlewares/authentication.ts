import { Request, Response, NextFunction } from 'express';
import { Status } from './helpers';
import User from '../models/UserRepository';
import { UserFields } from '../models/User';

export namespace Authentication {
  export const ErrorMessages = {
    ApiKey: {
      NotProvided: (host: string) =>
        `You must provide an api key after the url. Ex: https://${host}/api/v1/<resource>?apiKey=<your api key>`
    }
  };
  export const CheckUserIsLogged = (req: Request, res: Response, next: NextFunction) => {
    // TO DO
    next();
  };
  export const CheckKeyIsProvided = (req: Request, res: Response, next: NextFunction) =>
    req.query.apiKey
      ? next()
      : res.send({
          status: Status.Error,
          message: ErrorMessages.ApiKey.NotProvided(req.get('host'))
        });

  export async function ValidateKey(req: Request, res: Response, next: NextFunction): Promise<void> {
    const dbResponse: any = await User.GetByApiKey(req.query.apiKey);
    if (dbResponse.status === Status.Successfull) {
      next();
    } else {
      res.json({ status: 'error', message: 'You need a valid api key. Sign in to receive one' });
    }
  }
  export async function UpdateUserStatus(req: Request, res: Response, next: NextFunction) {
    await User.UpdateUserLastConexion(req.query.apiKey);
    next();
  }
}
