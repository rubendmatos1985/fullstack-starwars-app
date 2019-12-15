import { Request, Response, NextFunction } from "express";
import User from "../../models/User";
import { UserFields, IUserEntity } from "../../types/interfaces/User";
import { asyncCompose } from "../../utils/asyncCompose";
import { ifElse } from "ramda";
import { Func1 } from "../../types/genricTypes";


export namespace Api {
  export namespace Authentication {

    
  }
}