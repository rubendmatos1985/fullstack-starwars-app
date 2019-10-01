import { Request, Response, NextFunction } from 'express';
import { compose, ifElse, isNil, not } from 'ramda';
import {
  signInDataIsInvalid,
  sendErrorMessage,
  extractMessageFromValidationResult,
  validateOnSignIn,
  getUserByEmail,
  sendSuccessfullyResponse
} from './helpers';
import User from '../../models/User';
import { asyncCompose } from '../../utils/asyncCompose';
import { sendEmail } from '../../services/Email';
import { tryCatch } from 'ramda';


export namespace UserControllers {

  export namespace SignIn {

    export const Validate = (req: Request, res: Response, next: NextFunction) => ifElse(
      signInDataIsInvalid,
      compose(
        sendErrorMessage(res),
        extractMessageFromValidationResult,
        validateOnSignIn
      ),
      () => next()
    )(req)

    export const Save = (req: Request, res: Response, next: NextFunction) => asyncCompose(
      ifElse(
        compose(not, isNil),
        compose(
          sendErrorMessage(res),
          (user) => ({ message: `User with email ${user.email} already exists!'`, status: 'error' })
        ),
        () => asyncCompose(
          ({ api_key }) =>{ req.body.apiKey = api_key;  next()},
          User.create
        )(req.body)
      ),
      getUserByEmail
    )(req.body.email)

    export const SendEmailWithApiKey = (req: Request, res: Response, next: NextFunction) =>
      asyncCompose(
        ()=> next(),
        tryCatch(sendEmail, ()=> Promise.resolve().then(()=>{ req.body.error = "Error sending email" }))
      )(req.body)
    export const SendResponseToUser = (req: Request, res: Response, next: NextFunction)=>
      isNil(req.body.error)
      ? res.json({ status: 'successfull', message: 'Please check your email' })
      : res.json({ status: 'error', message: req.body.error })   
  }
}








