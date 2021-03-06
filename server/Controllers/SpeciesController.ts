import { Router, Request, Response } from 'express';
import { Controller } from './Controller';
import { ISpecieViewModel } from '../models/ViewModels/SpecieViewModel';
import SpecieRepository from '../models/SpecieRepository';
import { IDBResponse } from '../DB';
import { Status } from '../middlewares/helpers';
import {
  fail,
  DeleteItemsRequest,
  RemoveItemHandlerForDomain,
  AddItemHandlerForDomain,
  AddItemsRequest,
  UpdateEntityRequest
} from './commons';
import { ISpecieEntity } from '../models/Specie';
import { Permissions } from '../middlewares/permissions';
import { Validation } from '../middlewares/validation';

class SpeciesController extends Controller {
  constructor() {
    const router = () => {
      const r: Router = Router();
      r.get('/', this.HandleQueryParams);
      r.post('/delete/items', Permissions.Write, Validation.CheckItemIdIsProvided, this.RemoveItem);
      r.post('/add', Permissions.Write, Validation.CheckItemIdIsProvided, this.AddItem);
      r.post('/update', Permissions.Write, Validation.CheckItemIdIsProvided, this.Update);
      r.post('/create', Permissions.Write, this.CreateSpecie);
      r.post('/delete', Permissions.Write, Validation.CheckItemIdIsProvided, this.RemoveSpecie);
      return r;
    };
    super(router);
    this.Pathname = 'species';
  }

  public async GetById(req: Request, res: Response): Promise<Response> {
    const { message }: IDBResponse<ISpecieViewModel[]> = await SpecieRepository.GetById(req.query.id);
    return res.json(message);
  }
  private async CreateSpecie(req: Request, res: Response) {
    const { status, message } = await SpecieRepository.Create(req.body);
    if (status === Status.Successfull) {
      const redirectUrl = `/api/v1/${this.Pathname}?id=${message[0].id}&apiKey=${req.query.apiKey}`;
      return res.redirect(redirectUrl);
    }
    return fail(res, 'check your request body');
  }
  private async GetAll(req: Request, res: Response): Promise<Response> {
    const { status, message }: IDBResponse<ISpecieViewModel[]> = await SpecieRepository.GetAll();
    if (status === Status.Successfull) {
      return res.json(message);
    }
    return fail(res, 'Error');
  }

  private async GetByName(req: Request, res: Response): Promise<Response> {
    const { message }: IDBResponse<ISpecieViewModel[]> = await SpecieRepository.GetByName(req.query.name);
    return res.json(message);
  }

  private async HandleQueryParams(req: Request, res: Response) {
    if (req.query.id) {
      return this.GetById(req, res);
    }
    if (req.query.name) {
      return this.GetByName(req, res);
    }
    return this.GetAll(req, res);
  }

  private async RemoveSpecie(req: Request, res: Response) {
    const { status, message } = await SpecieRepository.RemoveThis(req.query.id);
    if (status === Status.Successfull) {
      const redirectUrl = `/api/v1/${this.Pathname}?apiKey=${req.query.apiKey}`;
      return res.redirect(redirectUrl);
    }
    return fail(res, 'something went wrong');
  }

  private async RemoveItem(req: DeleteItemsRequest, res: Response) {
    const removeItemHandler = RemoveItemHandlerForDomain(this.Pathname);
    const fieldNames: string[] = ['films', 'people'] as string[];

    const removers = [SpecieRepository.RemoveFilms, SpecieRepository.RemovePeople];
    return await Promise.all(
      new Array(fieldNames.length)
        .fill(removeItemHandler(req, res))
        .map((handler, i) => handler(fieldNames[i], removers[i]))
    );
  }
  private async AddItem(req: AddItemsRequest, res: Response) {
    const addItemHandler = AddItemHandlerForDomain(this.Pathname);
    const fieldNames: string[] = ['films', 'people'];
    const adders = [SpecieRepository.AddFilms, SpecieRepository.AddPeople];
    return await Promise.all(
      new Array(fieldNames.length)
        .fill(addItemHandler(req, res))
        .map((handler, i) => handler(fieldNames[i], adders[i]))
    ).catch((e) => ({ status: Status.Error, message: 'Error' }));
  }
  private async Update(req: UpdateEntityRequest<ISpecieEntity>, res: Response) {
    const redirectUrl = `/api/v1/${this.Pathname}?id=${req.query.id}&apiKey=${req.query.apiKey}`;
    const result: IDBResponse<string> = await SpecieRepository.Update({
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

export default SpeciesController;
