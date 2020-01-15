import { Request, Response, NextFunction } from 'express';
import validate from 'uuid-validate';
import { Status } from './helpers';
export namespace Validation {
  export const ErrorMessages = {
    Body: {
      AddOrRemoveItems: `You must provide a body for this request with the form {
        fieldName: string,
        itemsIds: string[]
      }`
    },
    Item: {
      IdNotProvided: 'item id not provided',
      InvalidIdFormat: 'Invalid id'
    }
  };

  export function CheckItemIdIsProvided(req: Request, res: Response, next: NextFunction) {
    if (req.query.id) {
      return next();
    }
    return res.status(400).json({ status: Status.Error, message: ErrorMessages.Item.IdNotProvided });
  }

  export function ValidateIdAsUUID(req: Request, res: Response, next: NextFunction) {
    if (req.query.id) {
      if (validate(req.query.id)) {
        return next();
      }
      return res.status(400).send({ status: Status.Error, message: ErrorMessages.Item.InvalidIdFormat });
    }
    return next();
  }
  export function AddOrRemoveItemsBodyParameters(req: Request, res: Response, next: NextFunction) {
    if (req.body && req.body.fieldName && req.body.itemsIds) {
      if (
        typeof req.body.fieldName === 'string' &&
        Array.isArray(req.body.itemsIds) &&
        req.body.itemsIds.map((v: string) => validate(v)).every((v: boolean) => v)
      ) {
        return next();
      }
      return res.status(404).json({
        status: Status.Error,
        message: ErrorMessages.Body.AddOrRemoveItems
      });
    }
    return res.status(404).json({
      status: Status.Error,
      message: ErrorMessages.Body.AddOrRemoveItems
    });
  }
}
