import { Router, Request, Response } from "express";
import Specie from "../models/SpecieRepository";
import { Controller } from "./Controller";
import { ISpecieViewModel } from "../models/ViewModels/SpecieViewModel";
import SpecieRepository from "../models/SpecieRepository";
import { IDBResponse } from "../DB";

class SpeciesController extends Controller {
  constructor() {
    const pathname = "specie";
    const router = () => {
      const r: Router = Router();
      r.get("/", this.HandleQueryParams);
      return r;
    };
    super(router, pathname);
  }

  public async GetById(req: Request, res: Response): Promise<Response> {
    const { message }: IDBResponse<ISpecieViewModel[]> = await Specie.getById(
      req.params.id
    );
    return res.json(message);
  }

  private async GetAll(req: Request, res: Response): Promise<Response> {
    const { message }: IDBResponse<ISpecieViewModel[]> = await Specie.getAll();
    return res.json(message);
  }

  private async GetByName(req: Request, res: Response): Promise<Response> {
    const {
      message
    }: IDBResponse<ISpecieViewModel[]> = await SpecieRepository.getByName(
      req.query.name
    );
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
}

export default SpeciesController;
