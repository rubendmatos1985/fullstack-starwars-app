import Joi, { ValidationResult } from "@hapi/joi";
import { Request } from "express";
import crypto from "crypto";
export type EmailFromRequest = string;
export namespace UserValidators {
  export const SignInData: (r: Request) => ValidationResult<any> = req =>
    Joi.object({
      name: Joi.string()
        .min(3)
        .required(),
      email: Joi.string()
        .email()
        .required(),
      password: Joi.string()
        .min(8)
        .required()
    }).validate(req.body);

  // AVOID TIMING ATTACK
  export const SafeCompare: (s1: string, s2: string) => boolean = (s1, s2) => {
    if (s1.length === s2.length) {
      return crypto.timingSafeEqual(Buffer.from(s1), Buffer.from(s2));
    } else {
      // ALWAYS RETURN FALSE
      // BUT AVOID TIMING ATTACK
      let smaller;
      let bigger;
      if (s1.length >= s2.length) {
        bigger = s1;
        smaller = s2;
      } else {
        bigger = s2;
        smaller = s1;
      }

      while (bigger.length > smaller.length) {
        smaller += "0";
      }
      return crypto.timingSafeEqual(Buffer.from(bigger), Buffer.from(smaller));
    }
  };
}
