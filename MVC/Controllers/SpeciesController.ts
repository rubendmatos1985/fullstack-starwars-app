import { Router, Request, Response } from 'express';
import Specie from '../../server/models/Specie';
import { IController } from './Controller';

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
        const r = await Specie.getById(req.params.id);
        return res.json(r);
    }

    public async GetAll(req: Request, res: Response){
        const r = await Specie.getAll();
        return res.json(r);
    }
}

export default SpeciesController;