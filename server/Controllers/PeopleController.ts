import { Controller } from './Controller';
import { Router, Response, Request, NextFunction } from 'express';
import PeopleRepository from '../models/PeopleRepository';
import {
  AddItemHandlerForDomain,
  RemoveItemHandlerForDomain,
  UpdateEntityRequest
} from './commons';
import { PeopleViewModelForeignFields } from '../models/ViewModels/PeopleViewModel';
import { People } from '../types/DB';
import { IDBResponse } from '../DB';
import { Status } from '../middlewares/helpers';
import { fail } from './commons';

class PeopleController extends Controller {
  constructor() {
    super(router);
    function router() {
      const r = Router();
      r.get('/', this.GetQueryParamsHandler);
      r.post('/add', this.AddItem);
      r.post('/delete', this.RemoveItem);
      r.post('/update', this.Update);
      return r;
    }
    this.Pathname = 'people';
  }

  async GetAll(req: Request, res: Response): Promise<Response> {
    const result = await PeopleRepository.GetAll();
    return res.json(result);
  }

  async GetById(req: Request, res: Response): Promise<Response> {
    const result: any = await PeopleRepository.GetById(req.query.id);
    return res.json(result);
  }

  async GetByName(req: Request, res: Response): Promise<Response> {
    const result = await PeopleRepository.GetByName(req.query.name);
    return res.send(result);
  }

  private GetQueryParamsHandler(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response> {
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

  private async RemoveItem(req: Request, res: Response) {
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

  private async Update(req: UpdateEntityRequest<People>, res: Response) {
    const redirectUrl = `/api/v1/${this.Pathname}?id=${req.query.id}&apiKey=${req.query.apiKey}`;
    const result: IDBResponse<string> = await PeopleRepository.Update({
      id: req.query.id,
      ...req.body
    });
    if (result.status === Status.Successfull) {
      return res.redirect(redirectUrl);
    } else {
      return fail(res, "Request body has invalid data");
    }
  }
}

export default PeopleController;
