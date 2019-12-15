import { ifElse } from 'ramda';
import { Request, Response, NextFunction } from 'express';
import { asyncCompose } from "../utils/asyncCompose";
import { IAuthenticationDBResponse, getUserByApiKey, Status } from './helpers';

export namespace Validation{
    export const ValidateKey = (req: Request, res: Response, next: NextFunction) =>
     asyncCompose(
       ifElse(
         (res: IAuthenticationDBResponse) => res.status === Status.Successfull,
         () => next(),
         () => res.json({ status: 'error', message: 'You need a valid api key. Sign in to receive one' })),
       getUserByApiKey
     )(req.query.apiKey)
}