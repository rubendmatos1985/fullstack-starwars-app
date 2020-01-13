import UserRepository from '../models/UserRepository';
import { Request, Response, NextFunction } from 'express';
import { IUserEntity } from '../models/User';
import { IDBResponse } from '../DB';
import { Status } from './helpers';

export namespace Permissions {
  export async function Write(req: Request, res: Response, next: NextFunction) {
    const user: IDBResponse<IUserEntity[]> = await UserRepository.GetByApiKey(
      req.query.apiKey
    );
    if (user.message[0].scopes.indexOf('write') >= 0) {
      return next();
    } else {
      res
        .status(403)
        .send({
          status: Status.Error,
          message:
            'You do not have the required permissions to make this operation'
        });
    }
  }
}
