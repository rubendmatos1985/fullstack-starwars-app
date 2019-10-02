import { Request, Response, NextFunction } from 'express';
import { compose, ifElse, isNil, not } from 'ramda';
import {
  signInDataIsInvalid,
  interruptFlowWithErrorMessage,
  extractMessageFromValidationResult,
  validateOnSignIn,
  getUserByEmail,
  buildUserAlreadyExistsMessage,
  mutateRequestBodyWithApiKey
} from './helpers';
import User from '../../models/User';
import { asyncCompose } from '../../utils/asyncCompose';
import { sendEmail } from '../../services/Email';
export namespace UserControllers {

  export namespace SignIn {

    export const Validate = (req: Request, res: Response, next: NextFunction) => ifElse(
      signInDataIsInvalid,
      compose(
        interruptFlowWithErrorMessage(res),
        extractMessageFromValidationResult,
        validateOnSignIn
      ),
      () => next()
    )(req)

    export const Save = (req: Request, res: Response, next: NextFunction) => asyncCompose(
      ifElse(
        compose(not, isNil),
        compose(
          interruptFlowWithErrorMessage(res),
          buildUserAlreadyExistsMessage
        ),
        () => asyncCompose(
          () => next(),
          mutateRequestBodyWithApiKey(req),
          User.create
        )(req.body)
      ),
      getUserByEmail
    )(req.body.email)

    export const SendEmailWithApiKey = async (req: Request, res: Response, next: NextFunction) => {
      await sendEmail(
        success => Promise.resolve({
          status: 'successfull',
          message: "Check your Email"
        })
          .then(obj => { req.body = obj }),
        error => Promise.resolve({
          status: 'error',
          message: "Error sending email. We are working on it. Pleas try later"
        })
          .then(obj => { req.body = obj })
      )(req.body)
      next();
    }
    export const SendResponseToUser = (req: Request, res: Response, next: NextFunction) => res.json(req.body)

  }
}








