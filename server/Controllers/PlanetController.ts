import { Controller } from "./Controller";
import { Router, Request, Response } from "express";
import PlanetRepository from "../models/PlanetRepository";

class PlanetController extends Controller {
  constructor() {
    const router = () => {
      const r = Router();
      r.get("/", this.QueryParamsHandler);
      return r;
    };
    super(router);
    this.Pathname = 'planet'
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
}

export default PlanetController;
