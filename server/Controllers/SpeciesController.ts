import { Router, Request, Response } from 'express';
import Specie from '../models/SpecieRepository';
import { IController } from './Controller';
import { ISpecieViewModel } from '../models/ViewModels/SpecieViewModel';
import SpecieRepository from '../models/SpecieRepository';

class SpeciesController implements IController {
    Router: () => Router;
    public Pathname: string;

    constructor() {
        this.Router = ()=>{
            const router: Router = Router();
            router.get("/", this.GetAll);
            router.get("/:id", this.GetById);
            return router;
        }
        this.Pathname = "species";
    }

    public async GetById(req: Request, res: Response):Promise<Response>{
        const r:ISpecieViewModel[] = await Specie.getById(req.params.id);
        return res.json(r);
    }

    private async GetAll(req: Request, res: Response){
        const r:ISpecieViewModel[] = await Specie.getAll();
        return res.json(r);
    }

    private async  GetByName(req: Request, res: Response){
        const r:ISpecieViewModel[] = await SpecieRepository.getByName(req.query.name) 
    }
}

export default SpeciesController;