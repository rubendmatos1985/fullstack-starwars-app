import User from "../models/UserRepository";
import { Func1 } from "../types/genricTypes";
import { IUserEntity, UserFields } from "../models/User";

export enum Status {
    Error = 'error',
    Successfull = 'successfull'
  }
  
export  interface IAuthenticationDBResponse {
    status: Status,
    message: string | IUserEntity[]
  }
  