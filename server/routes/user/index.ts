import Routes, { Router, Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import User from '../../models/User';
import { UserFields, IUserEntity } from '../../types/interfaces/User';
import { validateOnSignIn, extractErrorFromMessage, signDataIsInvalid, sendErrorMessage } from './helpers';
import { ifElse, compose } from 'ramda';

const R: Router = Routes();
interface IRequestBody {
  id?: string,
  name: string,
  email: string
}

const handleUserInput = (req: Request, res: Response, next: NextFunction) => ifElse(
  signDataIsInvalid,
  compose(
    sendErrorMessage(res),
    extractErrorFromMessage,
    validateOnSignIn
  ),
  ()=> next()
)(req)


interface RequestWithUserFromDB extends Request {
  user?: any,
  body: IRequestBody
}


R.post('/signin', handleUserInput,
  async (req: RequestWithUserFromDB, res: Response) => {
    const user: IUserEntity[] | [] = await User.getByField('email', req.body.email)
    if (user[0]) {
      res.status(403).json({ message: `User with email ${user[0].email} already exists!'`, status: 'error' })
    } else {
      const result: any[] = await User.add(req.body as any)
      res.json({ ...result[0], status: 'succesfull' })
    }

  })

R.post('/login', getUser, (req: RequestWithUserFromDB, res: Response) => {
  console.log(req.user)
  res.send(req.body)
})

R.post('/signout', (req: Request, res: Response) => {
  console.log(req.body)
  res.send('ok')
})

async function getUser(req: RequestWithUserFromDB, res: Response, next: NextFunction) {
  const result = await User.getByField(UserFields.Email, req.body.email)
  req.user = result;
  next();
}

export default R;