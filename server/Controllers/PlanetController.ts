import { Controller } from './Controller';
import { Router, Request, Response } from 'express';
import PlanetRepository from '../models/PlanetRepository';
import { AddItemHandlerForDomain } from './commons';
import { Status } from '../middlewares/helpers';

class PlanetController extends Controller {
  constructor() {
    const router = () => {
      const r = Router();
      r.get('/', this.QueryParamsHandler);
      r.post('/add', this.AddItemToPlanet)
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
  async AddItemToPlanet(req: Request, res: Response) {
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
}

export default PlanetController;
