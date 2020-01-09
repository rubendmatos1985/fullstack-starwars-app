import { Controller } from "../Controller";
import { Router, Response, Request, NextFunction } from 'express';
import { ValidateUserInput, HandleCreateUser, HandleSendSignInEmail } from "./middlewares";
import { Status } from "../../middlewares/helpers";

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
        HandleCreateUser,
        HandleSendSignInEmail,
        this.SignIn
      )
      return r;
    }
    super(router, pathname)
  }

  private SignIn(req: Request, res: Response, next: NextFunction): Response {
    return res.json({ status: Status.Successfull, message: "Please check your Email" })
  }
}

export default UserController;





