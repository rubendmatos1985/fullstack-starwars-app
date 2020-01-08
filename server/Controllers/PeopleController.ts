import { Controller } from "./Controller";
import { Router, Response, Request, NextFunction } from "express";
import PeopleRepository from '../models/PeopleRepository';

class PeopleController extends Controller {
    constructor() {
        const router  = () => {
            const r = Router();
            r.get("/", this.QueryParamsHandler);
            return r;
        }
        const pathname = "people";
        super(router, pathname)
    }

    async GetAll(req: Request, res: Response): Promise<Response>{
        const result = await PeopleRepository.getAll();
        return res.json(result);
    }

   async GetById (req: Request, res: Response): Promise<Response>{
        const result:any = await PeopleRepository.getById(req.query.id);
        return res.json(result);
    }

    async GetByName(req: Request, res: Response): Promise<Response>{
        const result = await PeopleRepository.getByName(req.query.name)
        return res.send(result)
    }

    QueryParamsHandler(req: Request, res: Response, next: NextFunction): Promise<Response>{
        const params = Object.keys(req.query)
        if (params.some(k => k === "name")) {
            return this.GetByName(req, res)
        }
        if (params.some(k => k === "id")) {
            return this.GetById(req, res)
        }

        return this.GetAll(req, res)
    }
}

export default PeopleController;