import { FilmViewModelForeignFields } from '../models/ViewModels/FilmViewModel';
import { Response, Request } from 'express';
import { IDBResponse } from '../DB';
import { Status } from '../middlewares/helpers';

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

export const fail = (res: Response, message: string): Response =>
  res.status(404).send({ status: 'error', message });

export const AddItemHandlerForDomain = (domain: string) => {
  return (req: AddItemsRequest, res: Response) => async (
    field: FilmViewModelForeignFields,
    adder: (filmId: string, itemIds: string[]) => IDBResponse<any>
  ): Promise<Response | void> => {
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
};
