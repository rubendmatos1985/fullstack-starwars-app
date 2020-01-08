import Joi, { ValidationResult } from '@hapi/joi';
import { Request } from 'express';

export type EmailFromRequest = string;
export namespace UserValidators {
  export const SignInData: (r: Request) => ValidationResult<any> = (req) => Joi.object({
    name: Joi.string().min(3).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(8).required()
  }).validate(req.body)

}

