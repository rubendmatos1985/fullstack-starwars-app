import Joi, { ValidationResult } from '@hapi/joi';
import { Request } from 'express';
import crypto from 'crypto';
export type EmailFromRequest = string;
export namespace UserValidators {
  export const SignInData: (r: Request) => ValidationResult<any> = (req) => Joi.object({
    name: Joi.string().min(3).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(8).required()
  }).validate(req.body)
  

  // AVOID TIMING ATTACK
  export const SafeCompare:(s1:string, s2:string)=> boolean = (s1, s2)=>{
    if(s1.length === s2.length){
      return crypto.timingSafeEqual(Buffer.from(s1), Buffer.from(s2))
    }
    else{
      // ALWAYS RETURN FALSE
      // BUT AVOID TIMING ATTACK
      const bigger:string = s1.length >= s2.length ? s1 : s2;
      return bigger
        .split('')
        .map((v, i)=> v === s2[i])
        .every(v => v) && s1.length === s2.length
       
    }
  } 

}

