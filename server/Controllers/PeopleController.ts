import { IController } from "./Controller";
import { Router, Response, Request, NextFunction } from "express";
import People from '../models/People';
import { IDBResponse } from "../DB";
import { PeopleEntityFields } from "../types/interfaces/People";
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
        const result = await People.getAll();
        return res.json(result);
    }

    GetById = async (req: Request, res: Response): Promise<Response> => {
        const result:any = await People.getById(req.query.id)();
        People.getById(req.query.id)()
        return res.json(result);
    }

    GetByName = async (req: Request, res: Response): Promise<Response> => {
        const result = await People.getByField(PeopleEntityFields.Name)(req.query.name)
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