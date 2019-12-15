import { Request, Response, NextFunction } from 'express';
import { asyncCompose } from '../utils/asyncCompose';
import {ifElse} from 'ramda';
import { getUserByApiKey, IAuthenticationDBResponse, Status } from './helpers';

export namespace Authentication{
    export const CheckUserIsLogged = (req: Request, res: Response, next: NextFunction)=>{
        
       console.log("User is Logged");
       console.log("Giving access");
       
        next();     
     }
     export const CheckKeyIsProvided = (req: Request, res: Response, next: NextFunction) =>
     req.query.apiKey
       ? next()
       : res.send({ status: 'error', message: 'You must provide an api key' })

   export const ValidateKey = (req: Request, res: Response, next: NextFunction) =>
     asyncCompose(
       ifElse(
         (res: IAuthenticationDBResponse) => res.status === Status.Successfull,
         () => next(),
         () => res.json({ status: 'error', message: 'You need a valid api key. Sign in to receive one' })),
       getUserByApiKey
     )(req.query.apiKey)
 }