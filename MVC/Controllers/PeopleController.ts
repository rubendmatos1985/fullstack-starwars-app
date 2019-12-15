import { IController } from "./Controller";
import { Router, Response, Request } from "express";
import People from '../../server/models/People';
/* const R:Router = Router();


R.get('/:id', async (req: Request, res: Response)=>{
  People.getById(req.params.id)()
   .then((result:any) => res.json(result));
})

R.get('/', async(req:Request, res:Response)=>{
  const result = await People.getAll()
  res.json(result)
}) */

class PeopleController implements IController {
    public Router: () => Router;

    public Pathname: string;

    constructor() {
        this.Router = () => {
            const router = Router();
            router.get("/", this.GetAll);
            router.get("/:id", this.GetById);
            return router;
        }
        this.Pathname = "people";
    }

    public async GetAll(req: Request, res: Response): Promise<Response> {
        const result = await People.getAll();
        return res.json(result);
    }

    public async GetById(req: Request, res: Response): Promise<Response>{
        const result = await People.getById(req.params.id);
        return res.json(result);
    }
}

export default PeopleController;