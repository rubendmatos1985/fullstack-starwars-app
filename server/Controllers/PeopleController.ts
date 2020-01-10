import { Controller } from './Controller';
import { Router, Response, Request, NextFunction } from 'express';
import PeopleRepository from '../models/PeopleRepository';
import { AddItemHandlerForDomain } from './commons';

class PeopleController extends Controller {
  constructor() {
    const router = () => {
      const r = Router();
      r.get('/', this.QueryParamsHandler);
      r.post('/add', this.AddToPeople);
      return r;
    };
    const pathname = 'people';
    super(router, pathname);
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

  private QueryParamsHandler(
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
    const addItemHandler = AddItemHandlerForDomain('people');
    const fieldNames: string[] = ['films', 'vehicles', 'starships', 'species'];
    const adders: any[] = [
      PeopleRepository.AddFilms,
      PeopleRepository.AddVehicles,
      PeopleRepository.AddStarships,
      PeopleRepository.AddSpecies
    ];
    return await Promise.all(
      new Array(fieldNames.length)
        .fill(addItemHandler(req, res))
        .map((fn, i) => fn(fieldNames[i], adders[i]))
    );
  }
}

export default PeopleController;
