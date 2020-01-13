import { Controller } from './Controller';
import { Router, Request, Response } from 'express';
import PlanetRepository from '../models/PlanetRepository';
import { AddItemHandlerForDomain, RemoveItemHandlerForDomain, UpdateEntityRequest, fail } from './commons';
import { Status } from '../middlewares/helpers';
import { Planet } from '../types/DB';
import { IDBResponse } from '../DB';
import PeopleRepository from '../models/PeopleRepository';
import { Permissions } from '../middlewares/permissions';

class PlanetController extends Controller {
  constructor() {
    const router = () => {
      const r = Router();
      r.get('/', this.QueryParamsHandler);
      r.post('/add', Permissions.Write, this.AddItem)
      r.post('/delete', Permissions.Write, this.RemoveItem)
      r.post('/update', Permissions.Write, this.Update)
      return r;
    };
    super(router);
    this.Pathname = 'planet';
  }

  async GetAll(req: Request, res: Response) {
    const planets = await PlanetRepository.getAll();
    return res.json(planets);
  }

  async GetById(req: Request, res: Response) {
    const r = await PlanetRepository.getById(req.query.id);
    return res.json(r);
  }

  async GetByName(req: Request, res: Response) {
    const r = await PlanetRepository.getByName(req.query.name);
    return res.json(r);
  }

  async QueryParamsHandler(req: Request, res: Response) {
    if (req.query.id) {
      return this.GetById(req, res);
    }
    if (req.query.name) {
      return this.GetByName(req, res);
    }
    return this.GetAll(req, res);
  }
  async AddItem(req: Request, res: Response) {
    const addItemHandler = AddItemHandlerForDomain(this.Pathname);
    const fieldNames: string[] = ['films', 'residents'];
    const adders = [PlanetRepository.AddFilms, PlanetRepository.AddResidents];
    return await Promise.all(
      new Array(fieldNames.length)
        .fill(addItemHandler(req, res))
        .map((handler, i) => handler(fieldNames[i], adders[i]))
    )
    .catch(e => ({ status: Status.Error, message: "Error" }));
  }

  async RemoveItem(req: Request, res: Response){
    const removeItemHandler = RemoveItemHandlerForDomain(this.Pathname)
    const fieldNames: string[] = ['films', 'residents'];
    const removers = [
      PlanetRepository.RemoveFilms,
      PlanetRepository.RemoveResidents
    ]
    return await Promise.all(
      new Array(fieldNames.length)
        .fill(removeItemHandler(req, res))
        .map((handler, i) => handler(fieldNames[i], removers[i]))
    )
    .catch(e => ({ status: Status.Error, message: "Error" }));
  }
  private async Update(req: UpdateEntityRequest<Planet>, res: Response) {
    const redirectUrl = `/api/v1/${this.Pathname}?id=${req.query.id}&apiKey=${req.query.apiKey}`;
    const result: IDBResponse<string> = await PlanetRepository.Update({
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

export default PlanetController;
