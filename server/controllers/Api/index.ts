import { Request, Response, NextFunction } from "express";
import User from "../../models/User";
import { UserFields, IUserEntity } from "../../types/interfaces/User";
import { asyncCompose } from "../../utils/asyncCompose";
import {ifElse} from "ramda";
import { Func1 } from "../../types/genricTypes";

enum Status {
  Error='error',
  Successfull = 'successfull'
}

interface IAuthenticationDBResponse {
  status: Status,
  message: string | IUserEntity[]
}


const getUserByApiKey:Func1<string, Promise<IAuthenticationDBResponse>> = 
  (apiKey: string) => User.getByField(UserFields.ApiKey)(apiKey)
    .then(v =>({ status: Status.Successfull, message: v }))
    .catch(e =>({ status: Status.Error, message: 'wrong api key' }));

export namespace Api {
  export namespace Authentication {
    export const CheckKey = (req: Request, res: Response, next: NextFunction) => 
      asyncCompose(
        ifElse(
          (res:IAuthenticationDBResponse) => res.status === Status.Successfull,
          ()=> next(),
          () => res.json({status: 'error', message: 'You need a valid api key. Sign in to receive one' })),
        getUserByApiKey
      )(req.query.apiKey)
    }
}