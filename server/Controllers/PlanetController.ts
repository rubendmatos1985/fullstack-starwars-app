import { Controller } from './Controller';
import { Router, Request, Response } from 'express';
import PlanetRepository from '../models/PlanetRepository';
import { AddItemHandlerForDomain, RemoveItemHandlerForDomain, UpdateEntityRequest, fail } from './commons';
import { Status } from '../middlewares/helpers';
import { Planet } from '../models/Planet';
import { IDBResponse } from '../DB';
import { Permissions } from '../middlewares/permissions';
import { Validation } from '../middlewares/validation';

class PlanetController extends Controller {
  constructor() {
    const router = () => {
      const r = Router();
      r.get('/', this.QueryParamsHandler);
      r.post('/add', Permissions.Write, Validation.CheckItemIdIsProvided, this.AddItem);
      r.post('/delete/items', Permissions.Write, Validation.CheckItemIdIsProvided, this.RemoveItem);
      r.post('/delete', Permissions.Write, Validation.CheckItemIdIsProvided, this.RemovePlanet);
      r.post('/update', Permissions.Write, Validation.CheckItemIdIsProvided, this.Update);
      r.post('/delete', Permissions.Write, Validation.CheckItemIdIsProvided, this.RemovePlanet);
      r.post('/create', Permissions.Write, this.CreatePlanet);
      return r;
    };
    super(router);
    this.Pathname = 'planets';
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
    ).catch((e) => ({ status: Status.Error, message: 'Error' }));
  }

  async RemoveItem(req: Request, res: Response) {
    const removeItemHandler = RemoveItemHandlerForDomain(this.Pathname);
    const fieldNames: string[] = ['films', 'residents'];
    const removers = [PlanetRepository.RemoveFilms, PlanetRepository.RemoveResidents];
    return await Promise.all(
      new Array(fieldNames.length)
        .fill(removeItemHandler(req, res))
        .map((handler, i) => handler(fieldNames[i], removers[i]))
    ).catch((e) => ({ status: Status.Error, message: 'Error' }));
  }

  async RemovePlanet(req: Request, res: Response) {
    const { status, message } = await PlanetRepository.RemoveThis(req.query.id);
    if (status === Status.Successfull) {
      const redirectUrl = `/api/v1/${this.Pathname}?apiKey=${req.query.apiKey}`;
      return res.redirect(redirectUrl);
    }
    return fail(res, 'something went wrong');
  }

  async CreatePlanet(req: Request, res: Response) {
    const { status, message } = await PlanetRepository.Create(req.body);
    if (status === Status.Successfull) {
      const redirectUrl = `/api/v1/${this.Pathname}?id=${message[0].id}&apiKey=${req.query.apiKey}`;
      return res.redirect(redirectUrl);
    }
    return fail(res, 'check your request body');
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
      return fail(res, 'Request body has invalid data');
    }
  }
}

export default PlanetController;
