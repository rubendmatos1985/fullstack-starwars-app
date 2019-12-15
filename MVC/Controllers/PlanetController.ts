import { IController } from "./Controller";
import { Router, Request, Response } from 'express';
import Planet from '../../server/models/Planet';

class PlanetController implements IController{
    public Router: ()=> Router;

    public Pathname: string;

    constructor(){
        this.Router = ()=>{
            const router = Router();
            router.get("/", this.GetAll)
            router.get("/:id", this.GetById)
            return router;
        }
        this.Pathname = "planets";
    }

   public async GetAll(req:Request, res:Response){
        const r = await Planet.getAll(); 
        return res.json(r);
   }

   public async GetById(req: Request, res: Response){
       const r = await Planet.getById(req.params.id);
       return res.json(r);
   }
    
}

export default PlanetController;