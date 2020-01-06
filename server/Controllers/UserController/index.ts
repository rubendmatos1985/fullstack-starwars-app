import { IController } from "../Controller";
import { Router, Response, Request, NextFunction } from 'express';
import { asyncCompose } from "../../utils/asyncCompose";
import { ifElse, compose } from "ramda";
import {
    interruptFlowWithErrorMessage,
    buildUserAlreadyExistsMessage,
    mutateRequestBodyWithApiKey,
    encryptPassword,
    getUserByEmail,
    signInDataIsNotValid,
    extractMessageFromValidationResult,
    validateOnSignIn
} from "./helpers";
import User from "../../models/User";
import { sendEmail } from "../../services/Email";
import { IDBResponse } from "../../DB";
import { Status } from "../../middlewares/helpers";
import { EntityTable } from "../../types/Tables";
import { UserFields } from "../../types/interfaces/User";

export interface RequestWithUserData extends Request { body: UserSubscriptionData }

export interface UserSubscriptionData {
    name: string,
    password: string,
    email: string
}

class UserController implements IController {
    public Router: () => Router
    public Pathname: string;

    constructor() {
        this.Pathname = "/user"
        this.Router = () => {
            const router = Router();
            router.post("/signin",
                this.ValidateUserInput,
                this.HandleCreateUser,
                this.HandleSendEmail,
                this.SendResponseToUser
                )
            return router;
        }
    }

    private async HandleCreateUser(req: Request, res: Response, next: NextFunction): Promise<Response> {
        return asyncCompose(
            ifElse(
               (dbResponse: IDBResponse)=> dbResponse.status === Status.Error,
                compose(
                    interruptFlowWithErrorMessage(res),
                    buildUserAlreadyExistsMessage
                ),
                () => asyncCompose(
                    () => next(),
                    mutateRequestBodyWithApiKey(req),
                    User.create,
                    encryptPassword
                )(req.body)
            ),
            getUserByEmail
        )(req.body.email)
    }

    private async ValidateUserInput(req: Request, res: Response, next: NextFunction) {
        return ifElse(
            signInDataIsNotValid,
            compose(
                interruptFlowWithErrorMessage(res),
                extractMessageFromValidationResult,
                validateOnSignIn
            ),
            () => next()
        )(req)
    }

   private async HandleSendEmail(req: Request, res: Response, next: NextFunction) {
        await sendEmail({
            onSuccess: () => Promise.resolve({
                status: 'successfull',
                message: "Check your Email"
            })
                .then(obj => { req.body = obj }),
            onError: () => Promise.resolve({
                status: 'error',
                message: "Error sending email. We are working on it. Pleas try later"
            })
                .then(obj => { req.body = obj })
        })(req.body)

        return next()
    }
    private SendResponseToUser(req: Request, res: Response, next: NextFunction): Response {
        return res.json(req.body)
    }
}

export default UserController;