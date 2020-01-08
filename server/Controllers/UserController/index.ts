import { Controller } from "../Controller";
import { Router, Response, Request, NextFunction } from 'express';
import bcrypt from 'bcrypt';
import { UserValidators } from "./validators";
import User from "../../models/UserRepository";
import { sendEmail } from "../../services/Email";
import { IDBResponse } from "../../DB";
import { Status } from "../../middlewares/helpers";
import { IUserEntity } from "../../models/User";

export interface RequestWithUserData extends Request { body: UserSubscriptionData }

export interface UserSubscriptionData {
  name: string,
  password: string,
  email: string
}

class UserController extends Controller {
  constructor() {
    const pathname = "/user"
    const router = () => {
      const r = Router();
      r.post("/signin",
        this.ValidateUserInput,
        this.HandleCreateUser,
        this.HandleSendEmail,
        this.SendResponseToUser
      )
      return r;
    }
    super(router, pathname)
  }

  private async HandleCreateUser(req: Request, res: Response, next: NextFunction): Promise<Response> {
    const user: IDBResponse<IUserEntity[]> = await User.getByEmail(req.body.email)
    if (user.status === Status.Successfull) {
      return res
        .status(404)
        .send({ status: "Error", message: `user with email ${req.body.email} already exists` })
    }
    try {
      const { name, email } = req.body;
      const salt: string = await bcrypt.genSalt(10)
      const password: string = await bcrypt.hash(req.body.password, salt);
      const newUser: IUserEntity = await User.create({ name, email, password })
      req.body.apiKey = newUser.api_key
      next();
    } catch (e) {
      console.log(e)
      return res.json({ status: Status.Error, message: "Sorry, we are having problems to process your request" })
    }
  }

  private async ValidateUserInput(req: RequestWithUserData, res: Response, next: NextFunction) {
    const { error } = UserValidators.SignInData(req)
    if (error) {
      return res
        .status(403)
        .send({ status: "Error", message: error.details.map(v => v.message) })
    }
    next()
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