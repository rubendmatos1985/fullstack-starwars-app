import { Controller } from "../Controller";
import { Router, Response, Request, NextFunction } from 'express';
import {
  ValidateUserInput,
  VerifyUserAlreadyExists,
  SendSignInEmail,
  HandleUpdateUserValidation
} from "./middlewares";
import { Status } from "../../middlewares/helpers";
import { Authentication } from '../../middlewares/authentication'
import UserRepository from "../../models/UserRepository";
import { EncryptPassword } from "./helpers";
import { IUserEntity } from "../../models/User";
import { EmailServiceProvider } from "../../services/Email";
import { IDBResponse } from "../../DB";
export interface RequestWithUserData extends Request { body: UserSubscriptionData }

export interface UserSubscriptionData {
  name: string,
  password: string,
  email: string,
  apiKey?: string
}

class UserController extends Controller {
  constructor() {
    const pathname = "/user"
    const router = () => {
      const r = Router();
      r.post(
        "/signin",
        ValidateUserInput,
        VerifyUserAlreadyExists,
        this.SignIn
      );
      r.patch(
        '/update',
        Authentication.CheckKeyIsProvided,
        Authentication.ValidateKey,
        HandleUpdateUserValidation,
        this.UpdateUserData
      )
      return r;
    }
    super(router, pathname)
  }

  private async SignIn(req: Request, res: Response, next: NextFunction): Promise<Response> {
    try {
      const { email, name } = req.body;
      const password = await EncryptPassword(req.body.password)
      const user:IDBResponse<IUserEntity[]> = await UserRepository.create({ name, email, password })
      console.log(user)
      await EmailServiceProvider.SendApiKeyEmail(user.message[0].api_key, email)

      return res.json({ status: Status.Successfull, message: "Please check your Email" })
    } catch (e) {
      console.log(e)
      return res
        .status(404)
        .json({ status: Status.Error, message: "Sorry, we are having problems to process your request" })
    }
  }

  private async UpdateUserData(req: Request, res: Response, next: NextFunction) {
    const newData = req.body;
    const pass = await EncryptPassword(req.body.password)
    const result = await UserRepository.updateUserData({
      ...newData,
      api_key: req.query.apiKey,
      password: pass
    })
    return res.json(result)
  }
}

export default UserController;








