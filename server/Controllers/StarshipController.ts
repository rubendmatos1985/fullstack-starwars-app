import { Router, Request, Response } from "express";
import Starship from "../models/StarshipRepository";
import { Controller } from "./Controller";

class StarshipController extends Controller {
  constructor() {
    const pathname = "starship";

    const router = () => {
      const r = Router();
      r.get("/", this.HandleQueryParams);
      return r;
    };
    super(router, pathname);
  }

  private async GetById(req: Request, res: Response): Promise<Response> {
    const r = await Starship.getById(req.params.id);
    return res.json(r);
  }

  private async GetAll(req: Request, res: Response): Promise<Response> {
    const r = await Starship.getAll();
    return res.json(r);
  }

  private async GetByName(req: Request, res: Response) {
    const r = await Starship.getByName(req.query.name);
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
}

export default StarshipController;
