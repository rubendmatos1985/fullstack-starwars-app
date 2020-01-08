import { Router, Response, Request } from 'express';
import Vehicle from '../models/VehicleRepository';
import { Controller } from './Controller';
import { Status } from '../middlewares/helpers';

const failedMessage = {
  status: Status.Error,
  message: "We are having problems please try later"
}

class VehicleController extends Controller {
  constructor() {
    const pathname = "vehicles";
    const router = () => {
      const r = Router();
      r.get("/", this.QueryParamsHandler);
      return r;
    }
    super(router, pathname)
  }

  private async GetById(req: Request, res: Response): Promise<Response> {
    try {
      const r = await Vehicle.getById(req.params.id);
      return res.json(r);
    } catch (e) {
      console.log(e)
      return res.json(failedMessage)
    }
  }


  private async GetAll(req: Request, res: Response): Promise<Response> {
    try {
      const r = await Vehicle.getAll();
      return res.json(r);
    } catch (e) {
      console.log(e)
      return res.json(failedMessage)
    }
  }

  private async GetByName(req: Request, res: Response): Promise<Response> {
    try {
      const r = await Vehicle.getByName(req.query.name)
      return res.json(r)
    } catch (e) {
      console.log(e)
      return res.json(failedMessage)
    }

  }
  private QueryParamsHandler(req: Request, res: Response){
    if(req.query.name){
      return this.GetByName(req, res)
    }
    if(req.query.id){
      return this.GetById(req, res)
    }
    return this.GetAll(req, res)
  }


}

export default VehicleController;

