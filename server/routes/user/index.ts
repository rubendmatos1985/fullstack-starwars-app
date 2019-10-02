import Routes, { Router, Request, Response, NextFunction } from 'express';
import User from '../../models/User';
import { UserFields } from '../../types/interfaces/User';
import { UserControllers } from '../../controllers/User';

interface RequestWithUserFromDB extends Request {
  user?: any,
  body: IRequestBody
}

const UserRouter: Router = Routes();
interface IRequestBody {
  id?: string,
  name: string,
  email: string
}

UserRouter
 .post('/signin', 
   UserControllers.SignIn.Validate, 
   UserControllers.SignIn.Save, 
   UserControllers.SignIn.SendEmailWithApiKey,
   UserControllers.SignIn.SendResponseToUser
  )
 
 .post('/login', getUser, (req: RequestWithUserFromDB, res: Response) => {
  console.log(req.user)
  res.send(req.body)})
 
  .post('/signout', (req: Request, res: Response) => {
  console.log(req.body)
  res.send('ok')
})

async function getUser(req: RequestWithUserFromDB, res: Response, next: NextFunction) {
  const result = await User.getByField(UserFields.Email)(req.body.email)
  req.user = result;
  next();
}

export default UserRouter;