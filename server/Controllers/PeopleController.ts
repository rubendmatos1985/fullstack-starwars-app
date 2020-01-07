import { IController } from "./Controller";
import { Router, Response, Request, NextFunction } from "express";
import PeopleRepository from '../models/PeopleRepository';
import { IDBResponse } from "../DB";
import { PeopleEntityFields } from "../models/People";
import { Status } from "../middlewares/helpers";


class PeopleController implements IController {
    public Router: () => Router;
    public Pathname: string;
    constructor() {
        this.Router = () => {
            const router = Router();
            router.get("/", this.QueryParamsHandler);
            return router;
        }
        this.Pathname = "people";
    }

    GetAll = async (req: Request, res: Response): Promise<Response> => {
        const result = await PeopleRepository.getAll();
        return res.json(result);
    }

    GetById = async (req: Request, res: Response): Promise<Response> => {
        const result:any = await PeopleRepository.getById(req.query.id);
        return res.json(result);
    }

    GetByName = async (req: Request, res: Response): Promise<Response> => {
        const result = await PeopleRepository.getByName(req.query.name)
        return res.send(result)
    }

    QueryParamsHandler = (req: Request, res: Response, next: NextFunction): Promise<Response> =>  {
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