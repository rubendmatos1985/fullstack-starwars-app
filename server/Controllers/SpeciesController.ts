import { Router, Request, Response } from 'express';
import { Controller } from './Controller';
import { ISpecieViewModel } from '../models/ViewModels/SpecieViewModel';
import SpecieRepository from '../models/SpecieRepository';
import { IDBResponse } from '../DB';
import { Status } from '../middlewares/helpers';
import {
  fail,
  DeleteItemsRequest,
  RemoveItemHandlerForDomain,
  AddItemHandlerForDomain,
  AddItemsRequest,
  UpdateEntityRequest
} from './commons';
import { Specie } from '../types/DB';
import { Permissions } from '../middlewares/permissions';

class SpeciesController extends Controller {
  constructor() {
    const router = () => {
      const r: Router = Router();
      r.get('/', this.HandleQueryParams);
      r.post('/delete', Permissions.Write, this.RemoveItem)
      r.post('/add', Permissions.Write, this.AddItem)
      r.post('/update', Permissions.Write, this.Update)
      return r;
    };
    super(router);
    this.Pathname = 'specie';
  }

  public async GetById(req: Request, res: Response): Promise<Response> {
    const {
      message
    }: IDBResponse<ISpecieViewModel[]> = await SpecieRepository.GetById(
      req.query.id
    );
    return res.json(message);
  }

  private async GetAll(req: Request, res: Response): Promise<Response> {
    const {
      status,
      message
    }: IDBResponse<ISpecieViewModel[]> = await SpecieRepository.GetAll();
    if (status === Status.Successfull) {
      return res.json(message);
    }
    return fail(res, 'Error');
  }

  private async GetByName(req: Request, res: Response): Promise<Response> {
    const {
      message
    }: IDBResponse<ISpecieViewModel[]> = await SpecieRepository.GetByName(
      req.query.name
    );
    return res.json(message);
  }

  private async HandleQueryParams(req: Request, res: Response) {
    if (req.query.id) {
      return this.GetById(req, res);
    }
    if (req.query.name) {
      return this.GetByName(req, res);
    }
    return this.GetAll(req, res);
  }

  private async RemoveItem(req: DeleteItemsRequest, res: Response) {
    const removeItemHandler = RemoveItemHandlerForDomain(this.Pathname);
    const fieldNames: string[] = ['films', 'people'] as string[];

    const removers = [
      SpecieRepository.RemoveFilms,
      SpecieRepository.RemovePeople
    ];
    return await Promise.all(
      new Array(fieldNames.length)
        .fill(removeItemHandler(req, res))
        .map((handler, i) => handler(fieldNames[i], removers[i]))
    );
  }
  async AddItem(req: AddItemsRequest, res: Response) {
    const addItemHandler = AddItemHandlerForDomain(this.Pathname);
    const fieldNames: string[] = ['films', 'people'];
    const adders = [SpecieRepository.AddFilms, SpecieRepository.AddPeople];
    return await Promise.all(
      new Array(fieldNames.length)
        .fill(addItemHandler(req, res))
        .map((handler, i) => handler(fieldNames[i], adders[i]))
    )
    .catch(e => ({ status: Status.Error, message: "Error" }));
  }
  private async Update(req: UpdateEntityRequest<Specie>, res: Response) {
    const redirectUrl = `/api/v1/${this.Pathname}?id=${req.query.id}&apiKey=${req.query.apiKey}`;
    const result: IDBResponse<string> = await SpecieRepository.Update({
      id: req.query.id,
      ...req.body
    });
    if (result.status === Status.Successfull) {
      return res.redirect(redirectUrl);
    } else {
      return fail(res, "Request body has invalid data");
    }
  }
}

export default SpeciesController;
