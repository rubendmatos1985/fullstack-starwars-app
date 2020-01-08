import { Router, Request, Response } from 'express';
import  Starship  from '../models/StarshipRepository';
import { Controller } from './Controller';

class StarshipController extends Controller{
    constructor(){
        const pathname = "starships";

        const router = ()=>{
            const r = Router();
            r.get("/", this.GetAll);
            r.get("/:id", this.GetById);
            return r;
        }
        super(router, pathname)
    }

    public async GetById(req: Request, res: Response): Promise<Response>{
        const r = await Starship.getById(req.params.id);
        return res.json(r);
    }

    public async GetAll(req: Request, res: Response): Promise<Response>{
        const r = await Starship.getAll();
        return res.json(r);
    }

    public async GetByName(req: Request, res: Response){
        // TO DO
    }

}

export default StarshipController;