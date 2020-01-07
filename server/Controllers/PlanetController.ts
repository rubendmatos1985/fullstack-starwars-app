import { IController } from "./Controller";
import { Router, Request, Response } from 'express';
import PlanetRepository from '../models/PlanetRepository';

class PlanetController implements IController {
    public Router: () => Router;

    public Pathname: string;

    constructor() {
        this.Router = () => {
            const router = Router();
            router.get("/", this.QueryParamsHandler)
            return router;
        }
        this.Pathname = "planets";
    }

    GetAll = (req: Request, res: Response) => {
        //const r = await Planet.getAll(); 
        return res.json({ t: "" });
    }

    GetById = async (req: Request, res: Response) => {
        const r = await PlanetRepository.getById(req.query.id);
        return res.json(r);
    }
    QueryParamsHandler = (req: Request, res: Response) => {
        if (req.query.id) {
            return this.GetById(req, res)
        }
        if (req.query.name) {
            return // TO DO
        }
        return this.GetAll(req, res)
    }

}

export default PlanetController;