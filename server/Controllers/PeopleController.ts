import { Controller } from './Controller';
import { Router, Response, Request, NextFunction } from 'express';
import PeopleRepository from '../models/PeopleRepository';
import { AddItemHandlerForDomain, RemoveItemHandlerForDomain } from './commons';
import { PeopleViewModelForeignFields } from '../models/ViewModels/PeopleViewModel';

class PeopleController extends Controller {
  foreignFields: PeopleViewModelForeignFields[];
  constructor() {
    super(router);
    function router() {
      const r = Router();
      r.get('/', this.GetQueryParamsHandler);
      r.post('/add', this.AddToPeople);
      r.post('/delete', this.RemoveFromPeople);
      return r;
    }
    this.Pathname = 'people';
    this.foreignFields = [];
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

  private async AddToPeople(req: Request, res: Response) {
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
        .map((adder, i) => adder(fieldNames[i], adders[i]))
    );
  }

  private async RemoveFromPeople() {
    const removeItemHandler = RemoveItemHandlerForDomain(this.Pathname);
    const foreignFields: PeopleViewModelForeignFields[] = [] as PeopleViewModelForeignFields[];
  }
}

export default PeopleController;
