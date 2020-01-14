import { Request, Response, NextFunction } from 'express';
import validate from 'uuid-validate';
import { Status } from './helpers';
export namespace Validation {
  export function CheckItemIdIsProvided(req: Request, res: Response, next: NextFunction) {
    if (req.query.id) {
      return next();
    }
    return res.status(400).json({ status: 'Error', message: 'item id not provided' });
  }

  export function ValidateIdAsUUID(req: Request, res: Response, next: NextFunction) {
    if (req.query.id) {
      if (validate(req.query.id)) {
        return next();
      }
      return res.status(400).send({ status: Status.Error, message: 'Invalid id' });
    }
    return next();
  }
}
