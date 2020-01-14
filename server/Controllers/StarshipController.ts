import { Router, Request, Response } from 'express';
import { Controller } from './Controller';
import { IDBResponse } from '../DB';
import { Status } from '../middlewares/helpers';
import {
  DeleteItemsRequest,
  RemoveItemHandlerForDomain,
  AddItemsRequest,
  AddItemHandlerForDomain,
  UpdateEntityRequest,
  fail
} from './commons';
import StarshipRepository from '../models/StarshipRepository';
import { Starship } from '../types/DB';
import { Permissions } from '../middlewares/permissions';
import { Validation } from '../middlewares/validation';

class StarshipController extends Controller {
  constructor() {
    const router = () => {
      const r = Router();
      r.get('/', this.HandleQueryParams);
      r.post(
        '/add',
        Permissions.Write,
        Validation.CheckItemIdIsProvided,
        this.AddItem
      );
      r.post(
        '/delete/items',
        Permissions.Write,
        Validation.CheckItemIdIsProvided,
        this.RemoveItem
      ),
        r.post(
          '/update',
          Permissions.Write,
          Validation.CheckItemIdIsProvided,
          this.Update
        );
      r.post(
        '/delete',
        Permissions.Write,
        Validation.CheckItemIdIsProvided,
        this.RemoveStarship
      );
      return r;
    };
    super(router);
    this.Pathname = 'starships';
  }

  async CreateStarship(req: Request, res: Response) {
    const { status, message } = await StarshipRepository.Create(req.body);
    if (status === Status.Successfull) {
      const redirectUrl = `/api/v1/${this.Pathname}?id=${message[0].id}&apiKey=${req.query.apiKey}`;
      return res.redirect(redirectUrl);
    }
    return fail(res, 'check your request body');
  }

  async RemoveStarship(req: Request, res: Response) {
    const { status, message } = await StarshipRepository.RemoveThis(
      req.query.id
    );
    if (status === Status.Successfull) {
      const redirectUrl = `/api/v1/${this.Pathname}?apiKey=${req.query.apiKey}`;
      return res.redirect(redirectUrl);
    }
    return fail(res, 'something went wrong');
  }

  private async GetById(req: Request, res: Response): Promise<Response> {
    const { status, message } = await StarshipRepository.getById(req.query.id);
    if (status === Status.Successfull) {
      return res.json(message);
    }
    return res.json({ status: 'error', message: 'Id provided is wrong' });
  }

  private async GetAll(req: Request, res: Response): Promise<Response> {
    const r = await StarshipRepository.getAll();
    return res.json(r);
  }

  private async GetByName(req: Request, res: Response) {
    const r = await StarshipRepository.getByName(req.query.name);
    return res.json(r);
  }

  private HandleQueryParams(req: Request, res: Response) {
    if (req.query.name) {
      return this.GetByName(req, res);
    }
    if (req.query.id) {
      return this.GetById(req, res);
    }
    return this.GetAll(req, res);
  }
  private async RemoveItem(req: DeleteItemsRequest, res: Response) {
    const removeItemHandler = RemoveItemHandlerForDomain(this.Pathname);
    const fieldNames: string[] = ['films', 'pilots'] as string[];

    const removers = [
      StarshipRepository.RemoveFilms,
      StarshipRepository.RemovePilots
    ];
    return await Promise.all(
      new Array(fieldNames.length)
        .fill(removeItemHandler(req, res))
        .map((handler, i) => handler(fieldNames[i], removers[i]))
    );
  }
  async AddItem(req: AddItemsRequest, res: Response) {
    const addItemHandler = AddItemHandlerForDomain(this.Pathname);
    const fieldNames: string[] = ['films', 'pilots'];
    const adders = [StarshipRepository.AddFilms, StarshipRepository.AddPilots];
    return await Promise.all(
      new Array(fieldNames.length)
        .fill(addItemHandler(req, res))
        .map((handler, i) => handler(fieldNames[i], adders[i]))
    ).catch((e) => ({ status: Status.Error, message: 'Error' }));
  }
  private async Update(req: UpdateEntityRequest<Starship>, res: Response) {
    const redirectUrl = `/api/v1/${this.Pathname}?id=${req.query.id}&apiKey=${req.query.apiKey}`;
    const result: IDBResponse<string> = await StarshipRepository.Update({
      id: req.query.id,
      ...req.body
    });
    if (result.status === Status.Successfull) {
      return res.redirect(redirectUrl);
    } else {
      return fail(res, 'Request body has invalid data');
    }
  }
}

export default StarshipController;
