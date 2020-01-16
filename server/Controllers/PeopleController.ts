import { Controller } from './Controller';
import { Router, Response, Request, NextFunction } from 'express';
import PeopleRepository from '../models/PeopleRepository';
import { AddItemHandlerForDomain, RemoveItemHandlerForDomain, UpdateEntityRequest } from './commons';
import { PeopleViewModelForeignFields, IPeopleViewModel } from '../models/ViewModels/PeopleViewModel';
import { IPeople } from '../models/People';
import { IDBResponse } from '../DB';
import { Status } from '../middlewares/helpers';
import { fail } from './commons';
import { Permissions } from '../middlewares/permissions';
import { Validation } from '../middlewares/validation';

class PeopleController extends Controller {
  constructor() {
    super(router);
    function router() {
      const r = Router();
      r.get('/', Validation.ValidateIdAsUUID, Validation.ValidateNameAsString, this.GetQueryParamsHandler);
      r.post('/add', Permissions.Write, Validation.CheckItemIdIsProvided, this.AddItem);
      r.post('/delete/items', Permissions.Write, Validation.CheckItemIdIsProvided, this.RemoveItems);
      r.post('/delete', Permissions.Write, Validation.CheckItemIdIsProvided, this.RemovePeople);
      r.post('/update', Permissions.Write, Validation.CheckItemIdIsProvided, this.Update);
      r.post('/create', Permissions.Write, this.CreatePeople);
      return r;
    }
    this.Pathname = 'people';
  }

  async GetAll(req: Request, res: Response): Promise<Response> {
    const result = await PeopleRepository.GetAll();
    return res.json(result);
  }

  async GetById(req: Request, res: Response): Promise<Response> {
    const { status, message }: IDBResponse<IPeopleViewModel[] | string> = await PeopleRepository.GetById(
      req.query.id
    );
    if (status === Status.Successfull) {
      return res.json(message);
    }
    return res.json({ status: Status.Error, message: 'An error ocurred' });
  }

  async GetByName(req: Request, res: Response): Promise<Response> {
    const result = await PeopleRepository.GetByName(req.query.name);
    return res.send(result);
  }

  private GetQueryParamsHandler(req: Request, res: Response, next: NextFunction): Promise<Response> {
    const params = Object.keys(req.query);
    if (params.some((k) => k === 'name')) {
      return this.GetByName(req, res);
    }
    if (params.some((k) => k === 'id')) {
      return this.GetById(req, res);
    }

    return this.GetAll(req, res);
  }

  private async AddItem(req: Request, res: Response) {
    const addItemHandler = AddItemHandlerForDomain(this.Pathname);
    const fieldNames: PeopleViewModelForeignFields[] = [
      'films',
      'vehicles',
      'starships',
      'species'
    ] as PeopleViewModelForeignFields[];
    const adders: any[] = [
      PeopleRepository.AddFilms,
      PeopleRepository.AddVehicles,
      PeopleRepository.AddStarships,
      PeopleRepository.AddSpecies
    ];
    return await Promise.all(
      new Array(fieldNames.length)
        .fill(addItemHandler(req, res))
        .map((handler, i) => handler(fieldNames[i], adders[i]))
    );
  }

  private async RemovePeople(req: Request, res: Response) {
    const { status, message } = await PeopleRepository.RemoveThis(req.query.id);
    if (status === Status.Successfull) {
      const redirectUrl = `/api/v1/${this.Pathname}?apiKey=${req.query.apiKey}`;
      return res.redirect(redirectUrl);
    }
    return fail(res, 'something went wrong');
  }

  private async RemoveItems(req: Request, res: Response) {
    const removeItemHandler = RemoveItemHandlerForDomain(this.Pathname);
    const fieldNames: PeopleViewModelForeignFields[] = [
      'films',
      'vehicles',
      'starships',
      'species'
    ] as PeopleViewModelForeignFields[];

    const removers = [
      PeopleRepository.RemoveFilms,
      PeopleRepository.RemoveVehicles,
      PeopleRepository.RemoveStarships,
      PeopleRepository.RemoveSpecies
    ];
    return await Promise.all(
      new Array(fieldNames.length)
        .fill(removeItemHandler(req, res))
        .map((handler, i) => handler(fieldNames[i], removers[i]))
    );
  }

  private async Update(req: UpdateEntityRequest<IPeople>, res: Response) {
    const redirectUrl = `/api/v1/${this.Pathname}?id=${req.query.id}&apiKey=${req.query.apiKey}`;
    const result: IDBResponse<string> = await PeopleRepository.Update({
      id: req.query.id,
      ...req.body
    });
    if (result.status === Status.Successfull) {
      return res.redirect(redirectUrl);
    } else {
      return fail(res, 'Request body has invalid data');
    }
  }
  private async CreatePeople(req: Request, res: Response) {
    const { status, message } = await PeopleRepository.Create(req.body);
    if (status === Status.Successfull) {
      const redirectUrl = `/api/v1/${this.Pathname}?id=${message[0].id}&apiKey=${req.query.apiKey}`;
      return res.redirect(redirectUrl);
    }
    return fail(res, 'check your request body');
  }
}

export default PeopleController;
