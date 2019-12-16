import { Router, Response, Request } from 'express';
import Vehicle  from '../models/vehicle';
import { IController } from './Controller';

class VehicleController implements IController{
    Router: ()=> Router   
    Pathname: string;

    constructor(){
        this.Pathname = "vehicles";

        this.Router = ()=>{
            const router = Router();
            router.get("/", this.GetAll);
            router.get("/:id", this.GetById);
            return router;
        }
    }

    public async GetById(req: Request, res: Response): Promise<Response>{
        const r = await Vehicle.getById(req.params.id);
        return res.json(r);
    }

    public async GetAll(req: Request, res: Response): Promise<Response>{
        const r = await Vehicle.getAll();
        return res.json(r);
    }

}

export default VehicleController;