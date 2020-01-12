import { FilmViewModelForeignFields } from '../models/ViewModels/FilmViewModel';
import { Response, Request } from 'express';
import { IDBResponse } from '../DB';
import { Status } from '../middlewares/helpers';

export interface UpdateEntityRequest<T> {
  body: T;
  query: {
    id: string;
    apiKey: string;
  };
}

export interface AddItemsRequest extends Request {
  body: IAddItemsRequestBody;
  query: {
    id: string;
    apiKey: string;
  };
}
export interface IAddItemsRequestBody {
  fieldName: string;
  itemsIds: string[];
}

export type Adder = (filmId: string, itemIds: string[]) => IDBResponse<any>;

export const fail = (res: Response, message: string): Response =>
  res.status(404).send({ status: 'error', message });

export const AddItemHandlerForDomain = (domain: string) => (
  req: AddItemsRequest,
  res: Response
) => async (field: string, adder: Adder): Promise<Response | void> => {
  const redirectUrl = `/api/v1/${domain}?id=${req.query.id}&apiKey=${req.query.apiKey}`;
  const { fieldName, itemsIds } = req.body;
  if (fieldName === field) {
    const { status, message } = await adder(req.query.id, itemsIds);
    if (status === Status.Successfull) {
      return res.redirect(redirectUrl);
    } else {
      return fail(res, message);
    }
  }
};

export const RemoveItemHandlerForDomain = (domain: string) =>
  function(req: Request, res: Response) {
    const redirectUrl = `/api/v1/${domain}?id=${req.query.id}&apiKey=${req.query.apiKey}`;
    return async (
      field: string,
      remover: (ids: string[]) => IDBResponse<any>
    ): Promise<Response | void> => {
      const { fieldName, itemsIds } = req.body;
      if (fieldName === field) {
        const { status, message } = await remover(itemsIds);
        if (status === Status.Successfull) {
          return res.redirect(redirectUrl);
        }
        return fail(res, message);
      }
    };
  };
