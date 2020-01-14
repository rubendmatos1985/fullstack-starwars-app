import { Router, Response, Request } from "express";
import VehicleRepository from "../models/VehicleRepository";
import { Controller } from "./Controller";
import { Status } from "../middlewares/helpers";
import { DeleteItemsRequest, RemoveItemHandlerForDomain, AddItemsRequest, AddItemHandlerForDomain, UpdateEntityRequest, fail } from "./commons";
import { Vehicle } from "../types/DB";
import { IDBResponse } from "../DB";
import { Permissions } from "../middlewares/permissions";

const failedMessage = {
  status: Status.Error,
  message: "We are having problems please try later"
};

class VehicleController extends Controller {
  constructor() {
    const router = () => {
      const r = Router();
      r.get("/", this.QueryParamsHandler);
      r.post('/update', Permissions.Write, this.Update)
      r.post('/delete/items', Permissions.Write, this.RemoveItem)
      r.post('/add', Permissions.Write, this.AddItem)
      r.post('/create', Permissions.Write, this.CreateVehicle)
      r.post('/delete', Permissions.Write, this.RemoveVehicle)
      return r;
    };
    super(router);
    this.Pathname = 'vehicles'
  }

  private async GetById(req: Request, res: Response): Promise<Response> {
    try {
      const r = await VehicleRepository.getById(req.query.id);
      return res.json(r);
    } catch (e) {
      return res.json(failedMessage);
    }
  }

  private async GetAll(req: Request, res: Response): Promise<Response> {
    try {
      const r = await VehicleRepository.getAll();
      return res.json(r);
    } catch (e) {
      return res.json(failedMessage);
    }
  }

  private async GetByName(req: Request, res: Response): Promise<Response> {
    try {
      const r = await VehicleRepository.getByName(req.query.name);
      return res.json(r);
    } catch (e) {
      return res.json(failedMessage);
    }
  }
  private async QueryParamsHandler(req: Request, res: Response) {
    if (req.query.name) {
      return this.GetByName(req, res);
    }
    if (req.query.id) {
      return this.GetById(req, res);
    }
    return this.GetAll(req, res);
  }
  private async RemoveItem(req: DeleteItemsRequest, res: Response) {
    const removeItemHandler = RemoveItemHandlerForDomain(this.Pathname);
    const fieldNames: string[] = ['films', 'pilots'] as string[];

    const removers = [
      VehicleRepository.RemoveFilms,
      VehicleRepository.RemovePilots
    ];
    return await Promise.all(
      new Array(fieldNames.length)
        .fill(removeItemHandler(req, res))
        .map((handler, i) => handler(fieldNames[i], removers[i]))
    );
  }
  async RemoveVehicle(req: Request, res: Response){
    const { status, message } = await VehicleRepository.RemoveThis(req.query.id)
    if(status === Status.Successfull){
      const redirectUrl = `/api/v1/${this.Pathname}?apiKey=${req.query.apiKey}`;
      return res.redirect(redirectUrl)
    }
    return fail(res, 'something went wrong')
  }
  private async CreateVehicle(req: Request, res: Response){
    const { status, message } = await VehicleRepository.Create(req.body);
    if(status === Status.Successfull){
      const redirectUrl = `/api/v1/${this.Pathname}?id=${message[0].id}&apiKey=${req.query.apiKey}`;
      return res.redirect(redirectUrl)
    }
    return fail(res, 'check your request body')
  }

  private async AddItem(req: AddItemsRequest, res: Response) {
    const addItemHandler = AddItemHandlerForDomain(this.Pathname);
    const fieldNames: string[] = ['films', 'pilots'];
    const adders = [VehicleRepository.AddFilms, VehicleRepository.AddPilots];
    return await Promise.all(
      new Array(fieldNames.length)
        .fill(addItemHandler(req, res))
        .map((handler, i) => handler(fieldNames[i], adders[i]))
    ).catch((e) => ({ status: Status.Error, message: 'Error' }));
  }
  private async Update(req: UpdateEntityRequest<Vehicle>, res: Response) {
    const redirectUrl = `/api/v1/${this.Pathname}?id=${req.query.id}&apiKey=${req.query.apiKey}`;
    const result: IDBResponse<string> = await VehicleRepository.Update({
      id: req.query.id,
      ...req.body
    });
    if (result.status === Status.Successfull) {
      return res.redirect(redirectUrl);
    } else {
      return fail(res, 'Request body has invalid data');
    }
  }
}

export default VehicleController;
