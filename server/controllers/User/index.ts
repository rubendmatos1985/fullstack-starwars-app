import { Request, Response, NextFunction } from 'express';
import { compose, ifElse, isNil, not } from 'ramda';
import { 
    signInDataIsInvalid, 
    sendErrorMessage, 
    extractMessageFromValidationResult, 
    validateOnSignIn, 
    getUserByEmail, 
    sendSuccessfullyResponse } from './helpers';
import User from '../../models/User';
import { asyncCompose } from '../../utils/asyncCompose';


export namespace UserControllers {
  export namespace SignIn{
    export const Validate = (req: Request, res: Response, next: NextFunction) => ifElse(
      signInDataIsInvalid,
      compose(
        sendErrorMessage(res),
        extractMessageFromValidationResult,
        validateOnSignIn
      ),
      () => next()
    )(req)
  
    export const Save = (req: Request, res: Response) => asyncCompose(
      ifElse(
        compose(not, isNil),
        compose(
          sendErrorMessage(res),
          (user) => ({ message: `User with email ${user.email} already exists!'`, status: 'error' })
        ),
        () => asyncCompose(
          sendSuccessfullyResponse(res),
          User.create
        )(req.body)
      ),
      getUserByEmail
    )(req.body.email)
  }
}








