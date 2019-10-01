import Routes, { Router, Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import User from '../../models/User';
import { UserFields, IUserEntity } from '../../types/interfaces/User';
import { UserControllers } from '../../controllers/User';

interface RequestWithUserFromDB extends Request {
  user?: any,
  body: IRequestBody
}

const R: Router = Routes();
interface IRequestBody {
  id?: string,
  name: string,
  email: string
}


R.post('/signin', UserControllers.SignIn.Validate, UserControllers.SignIn.Save)

R.post('/login', getUser, (req: RequestWithUserFromDB, res: Response) => {
  console.log(req.user)
  res.send(req.body)
})

R.post('/signout', (req: Request, res: Response) => {
  console.log(req.body)
  res.send('ok')
})

async function getUser(req: RequestWithUserFromDB, res: Response, next: NextFunction) {
  const result = await User.getByField(UserFields.Email)(req.body.email)
  req.user = result;
  next();
}

export default R;