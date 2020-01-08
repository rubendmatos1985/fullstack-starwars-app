import { IController, Controller } from "./Controller";
import { Router, Request, Response } from 'express';
import PlanetRepository from '../models/PlanetRepository';

class PlanetController extends Controller {
    constructor() {
        const pathname = 'planet';
        const router = () => {
            const r = Router();
            r.get("/", this.QueryParamsHandler)
            return r; 
         }
        super(router, pathname)
    }

    async GetAll(req: Request, res: Response){
        const planets = await PlanetRepository.getAll()
        return res.json(planets);
    }

    async GetById(req: Request, res: Response){
        const r = await PlanetRepository.getById(req.query.id);
        return res.json(r);
    }
    async QueryParamsHandler(req: Request, res: Response){
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