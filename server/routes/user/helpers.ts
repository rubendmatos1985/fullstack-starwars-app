import Joi, { ValidationResult } from '@hapi/joi';
import { Request, Response } from 'express';
import { has, Pred, compose } from 'ramda';

export const validateOnSignIn: (r: Request) => ValidationResult<any> = (req) => Joi.object({
    name: Joi.string().min(3).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(8).required()
  }).validate(req.body)


export const extractErrorFromMessage = (result: any) => result.error.details.map(v => v.message)


export const signDataIsInvalid:(r:Request) => boolean = compose(has('error'), validateOnSignIn)


export const sendErrorMessage = (res: Response) => (message: any) => res.status(403).send({ status: "Error", message })
