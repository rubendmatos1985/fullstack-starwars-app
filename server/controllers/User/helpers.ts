import Joi, { ValidationResult } from '@hapi/joi';
import { Request, Response } from 'express';
import { has, compose } from 'ramda';
import User from '../../models/User';
import { Func1, Action2 } from '../../types/genricTypes';
import { asyncCompose } from '../../utils/asyncCompose';
import { NextFunction } from 'connect';
export type EmailFromRequest = string;


export const validateOnSignIn: (r: Request) => ValidationResult<any> = (req) => Joi.object({
  name: Joi.string().min(3).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(8).required()
}).validate(req.body)


export const extractMessageFromValidationResult: Func1<ValidationResult<any>, string[]> = (result) => (
  result.error.details.map(v => v.message)
)


export const signInDataIsInvalid: Func1<Request, boolean> = compose(has('error'), validateOnSignIn)


export const sendErrorMessage: Action2<Response, any> = (res) => (message) => (
  res.status(403).send({ status: "Error", message })
)

export const getUserByEmail: Func1<EmailFromRequest, Promise<any[] | []>> = User.getByField('email');


export const sendSuccessfullyResponse = (res: Response) => (objFromDB: any) =>
  res.json({ ...objFromDB, status: 'succesfull' })


export const buildUserAlreadyExistsMessage = (user) => 
  ({ message: `User with email ${user.email} already exists!'`, status: 'error' })


  export const buildAndSendErrorMessage = (res:Response) => compose(
    sendErrorMessage(res),
    buildUserAlreadyExistsMessage
  )


  export const mutateRequestBodyWithValue = (req:Request, newKeyName: string, keyInObj: string) => 
    (obj) =>{ req.body[newKeyName]  = obj[keyInObj]; }

