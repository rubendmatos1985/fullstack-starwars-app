import Joi, { ValidationResult } from '@hapi/joi';
import { Request, Response } from 'express';
import { has, compose } from 'ramda';
import User from '../../models/User';
import { Func1, Action2 } from '../../types/genricTypes';
import bcrypt from 'bcrypt';
import { asyncCompose } from '../../utils/asyncCompose';
import { UserControllers } from '.';

export type EmailFromRequest = string;

interface UserDataWithBcryptSalt extends UserControllers.SignIn.UserSubscriptionData{ salt: string }

type PasswordEncrypter = (d: UserControllers.SignIn.UserSubscriptionData)=> UserControllers.SignIn.UserSubscriptionData


export const validateOnSignIn: (r: Request) => ValidationResult<any> = (req) => Joi.object({
  name: Joi.string().min(3).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(8).required()
}).validate(req.body)


export const extractMessageFromValidationResult: Func1<ValidationResult<any>, string[]> = (result) => (
  result.error.details.map(v => v.message)
)


export const signInDataIsInvalid: Func1<Request, boolean> = compose(has('error'), validateOnSignIn)


export const interruptFlowWithErrorMessage: Action2<Response, any> = (res) => (message) => (
  res.status(403).send({ status: "Error", message })
)

export const getUserByEmail: Func1<EmailFromRequest, Promise<any[] | []>> = User.getByField('email');


export const sendSuccessfullyResponse = (res: Response) => (objFromDB: any) =>
  res.json({ ...objFromDB, status: 'succesfull' })


export const buildUserAlreadyExistsMessage = (user) =>
  ({ message: `User with email ${user.email} already exists!'`, status: 'error' })


export const mutateRequestBodyWithApiKey = (req: Request) => (obj) => { req.body.apiKey = obj.api_key; }

export const encryptPassword:PasswordEncrypter = asyncCompose (
  async (obj: UserDataWithBcryptSalt)=> 
    ({ name: obj.name, email: obj.email, password: await bcrypt.hash(obj.password, obj.salt) }),
  
  async (reqBody:UserControllers.SignIn.UserSubscriptionData)=> 
    ({...reqBody, salt: await bcrypt.genSalt(10)})
 )