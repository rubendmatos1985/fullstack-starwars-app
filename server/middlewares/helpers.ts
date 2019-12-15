import User from "../models/User";
import { Func1 } from "../types/genricTypes";
import { IUserEntity, UserFields } from "../types/interfaces/User";

export enum Status {
    Error = 'error',
    Successfull = 'successfull'
  }
  
export  interface IAuthenticationDBResponse {
    status: Status,
    message: string | IUserEntity[]
  }
  
  
export  const getUserByApiKey: Func1<string, Promise<IAuthenticationDBResponse>> =
    (apiKey: string) => User.getByField(UserFields.ApiKey)(apiKey)
      .then(v => ({ status: Status.Successfull, message: v }))
      .catch(e => ({ status: Status.Error, message: 'wrong api key' }));