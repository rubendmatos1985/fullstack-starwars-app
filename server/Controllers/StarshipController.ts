import { Router, Request, Response } from 'express';
import  Starship  from '../models/starship';
import { IController } from './Controller';

class StarshipController implements IController{
    Router: ()=> Router   
    Pathname: string;

    constructor(){
        this.Pathname = "starships";

        this.Router = ()=>{
            const router = Router();
            router.get("/", this.GetAll);
            router.get("/:id", this.GetById);
            return router;
        }
    }

    public async GetById(req: Request, res: Response): Promise<Response>{
        const r = await Starship.getById(req.params.id);
        return res.json(r);
    }

    public async GetAll(req: Request, res: Response): Promise<Response>{
        const r = await Starship.getAll();
        return res.json(r);
    }

}

export default StarshipController;