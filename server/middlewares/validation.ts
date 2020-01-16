import { Request, Response, NextFunction } from 'express';
import validate from 'uuid-validate';
import { Status } from './helpers';
import { contains } from 'ramda';
export namespace Validation {
  export const ErrorMessages = {
    Body: {
      AddOrRemoveItems: `You must provide a body for this request with the form {
        fieldName: string,
        itemsIds: string[]
      }`
    },
    Query: {
      IdNotProvided: 'item id not provided',
      InvalidIdFormat: 'Invalid id',
      NumbersInName: 'Name may not contain numbers'
    }
  };

  export function CheckItemIdIsProvided(req: Request, res: Response, next: NextFunction) {
    if (req.query.id) {
      return next();
    }
    return res.status(400).json({ status: Status.Error, message: ErrorMessages.Query.IdNotProvided });
  }

  export function ValidateIdAsUUID(req: Request, res: Response, next: NextFunction) {
    if (req.query.id) {
      if (validate(req.query.id)) {
        return next();
      }
      return res.status(400).send({ status: Status.Error, message: ErrorMessages.Query.InvalidIdFormat });
    }
    return next();
  }
  export function ValidateNameAsString(req: Request, res: Response, next: NextFunction) {
    const validateQuery: (q: string) => boolean = (query) => {
      const formattedString: string = query
        .trim()
        .split(' ')
        .join('');
      const matched: string[] | null = formattedString.match(/[a-zA-Z\u00C0-\u017F]+/);
      return matched !== null
        ? matched[0] !== 'null' && matched[0] !== 'undefined' && matched[0].length === formattedString.length
        : false;
    };
    if (req.query.name) {
      if (validateQuery(req.query.name)) {
        return next();
      }
      console.log('wrong name', req.query.name);
      return res.status(400).json({ status: Status.Error, message: ErrorMessages.Query.NumbersInName });
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
      return res.status(400).json({
        status: Status.Error,
        message: ErrorMessages.Body.AddOrRemoveItems
      });
    }
    return res.status(400).json({
      status: Status.Error,
      message: ErrorMessages.Body.AddOrRemoveItems
    });
  }
}
