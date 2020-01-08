import Joi, { ValidationResult } from '@hapi/joi';
import { Request, Response } from 'express';
import { has, compose } from 'ramda';
import User from '../../models/UserRepository';
import { Func1, Action2 } from '../../types/genricTypes';
import bcrypt from 'bcrypt';
import { asyncCompose } from '../../utils/asyncCompose';
import { UserSubscriptionData } from './index';
import { IDBResponse } from '../../DB';
import { UserFields } from '../../models/User';

export type EmailFromRequest = string;

interface UserDataWithBcryptSalt extends UserSubscriptionData{ salt: string }

type PasswordEncrypter = (d: UserSubscriptionData)=> UserSubscriptionData


export const validateOnSignIn: (r: Request) => ValidationResult<any> = (req) => Joi.object({
  name: Joi.string().min(3).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(8).required()
}).validate(req.body)


export const extractMessageFromValidationResult: Func1<ValidationResult<any>, string[]> = (result) => (
  result.error.details.map(v => v.message)
)


export const signInDataIsNotValid: Func1<Request, boolean> = compose(has('error'), validateOnSignIn)


export const interruptFlowWithErrorMessage: Action2<Response, any> = (res) => (message) => (
  res.status(403).send({ status: "Error", message })
)

export const getUserByEmail: Func1<EmailFromRequest, Promise<any>> = User.getByField(UserFields.Email);


export const sendSuccessfullyResponse = (res: Response) => (objFromDB: any) =>
  res.json({ ...objFromDB, status: 'succesfull' })


export const buildUserAlreadyExistsMessage = (user) =>
  ({ message: `User with email ${user.email} already exists!'`, status: 'error' })


export const mutateRequestBodyWithApiKey = (req: Request) => (obj) => { req.body.apiKey = obj.api_key; }

export const encryptPassword:PasswordEncrypter = asyncCompose (
  async (obj: UserDataWithBcryptSalt)=> 
    ({ name: obj.name, email: obj.email, password: await bcrypt.hash(obj.password, obj.salt) }),
  
  async (reqBody:UserSubscriptionData)=> 
    ({...reqBody, salt: await bcrypt.genSalt(10)})
 )