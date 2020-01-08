import { Router, Response, Request } from 'express';
import Vehicle from '../models/VehicleRepository';
import { IController } from './Controller';
import { Status } from '../middlewares/helpers';

const failedMessage = {
  status: Status.Error,
  message: "We are having problems please try later"
}

class VehicleController implements IController {
  Router: () => Router
  Pathname: string;

  constructor() {
    this.Pathname = "vehicles";

    this.Router = () => {
      const router = Router();
      router.get("/", this.GetAll);
      router.get("/:id", this.GetById);
      return router;
    }
  }

  public async GetById(req: Request, res: Response): Promise<Response> {
    try {
      const r = await Vehicle.getById(req.params.id);
      return res.json(r);
    } catch (e) {
      console.log(e)
      return res.json(failedMessage)
    }
  }


  public async GetAll(req: Request, res: Response): Promise<Response> {
    try {
      const r = await Vehicle.getAll();
      return res.json(r);
    } catch (e) {
      console.log(e)
      return res.json(failedMessage)
    }
  }

  public async GetByName(req: Request, res: Response): Promise<Response> {
    try {
      const r = await Vehicle.getByName(req.query.name)
      return res.json(r)
    } catch (e) {
      console.log(e)
      return res.json(failedMessage)
    }

  }

}

export default VehicleController;