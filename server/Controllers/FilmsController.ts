import { Request, Response, Router } from 'express';
import {
  IFilmViewModel,
  FilmViewModelForeignFields
} from '../models/ViewModels/FilmViewModel';
import FilmRepository from '../models/FilmRepository';
import { Controller } from './Controller';
import { IDBResponse } from '../DB';
import { Status } from '../middlewares/helpers';
import { Film } from '../../server/models/Film';
import { IAddItemsRequestBody, AddItemHandlerForDomain, fail, RemoveItemHandlerForDomain } from './commons';
import { Permissions } from '../middlewares/permissions';

interface IDeleteItemsRequestBody {
  fieldName: string;
  itemsIds: string[];
}

interface DeleteItemsRequest extends Request {
  body: IDeleteItemsRequestBody;
}

interface AddItemsRequest extends Request {
  body: IAddItemsRequestBody;
  query: {
    id: string;
    apiKey: string;
  };
}

interface UpdateContentRequest extends Request {
  body: Film;
  query: {
    id: string;
    apiKey: string;
  };
}

class FilmsController extends Controller {
  public constructor() {
    const router = () => {
      const r: Router = Router();
      r.get('/', this.HandleQueryParams);
      r.post('/delete/items', Permissions.Write, this.RemoveItems);
      r.post('/delete', Permissions.Write, this.RemoveFilm)
      r.post('/add', Permissions.Write, this.AddToFilm);
      r.post('/update', Permissions.Write, this.UpdateFilmContent);
      r.post('/create', Permissions.Write, this.CreateFilm)
      return r;
    };
    super(router);
    this.Pathname = 'films';
  }

  private async GetAll(
    request: Request,
    response: Response
  ): Promise<Response> {
    const result:
      | IDBResponse<IFilmViewModel[]>
      | any = await FilmRepository.GetAll();
    return response.json(result.message);
  }

  private async GetById(
    request: Request,
    response: Response
  ): Promise<Response> {
    const result:
      | IDBResponse<IFilmViewModel[]>
      | any = await FilmRepository.GetById(request.query.id);
    return response.json(result.message);
  }

  private async GetByName(
    request: Request,
    response: Response
  ): Promise<Response> {
    const result:
      | IDBResponse<IFilmViewModel[]>
      | any = await FilmRepository.GetByName(request.query.id);
    return response.json(result.message);
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

  private async RemoveItems(req: DeleteItemsRequest, res: Response) {
    const removeItemsHandler = RemoveItemHandlerForDomain('films');
    const fieldNames: FilmViewModelForeignFields[] = [
      'characters',
      'vehicles',
      'planets',
      'species',
      'starships'
    ] as FilmViewModelForeignFields[];

    const removers = [
      FilmRepository.RemoveCharacters,
      FilmRepository.RemoveVehicles,
      FilmRepository.RemovePlanets,
      FilmRepository.RemoveSpecies,
      FilmRepository.RemoveStarships
    ];
    return await Promise.all(
      new Array(fieldNames.length)
        .fill(removeItemsHandler(req, res))
        .map((handler, i) => handler(fieldNames[i], removers[i]))
    );
  }

  private async RemoveFilm(req:Request, res:Response){
    const { status, message } = await FilmRepository.RemoveThis(req.query.id);
    if(status === Status.Successfull){
      const redirectUrl = `/api/v1/${this.Pathname}&apiKey=${req.query.apiKey}`;
      return res.redirect(redirectUrl)
    }
    return fail(res, 'something went wrong')
  }

  private async AddToFilm(req: AddItemsRequest, res: Response) {
    const addItemHandler = AddItemHandlerForDomain(this.Pathname);
    const fieldNames: FilmViewModelForeignFields[] = [
      'characters',
      'vehicles',
      'planets',
      'species',
      'starships'
    ] as FilmViewModelForeignFields[];
    const adders = [
      FilmRepository.AddCharacters,
      FilmRepository.AddVehicles,
      FilmRepository.AddPlanets,
      FilmRepository.AddSpecies,
      FilmRepository.AddStarships
    ];

    return await Promise.all(
      new Array(fieldNames.length)
        .fill(addItemHandler(req, res))
        .map((fn, i) => fn(fieldNames[i], adders[i]))
    );
  }
  private async UpdateFilmContent(req: UpdateContentRequest, res: Response) {
    const redirectUrl = `/api/v1/${this.Pathname}?id=${req.query.id}&apiKey=${req.query.apiKey}`;
    const { status, message } = await FilmRepository.Update({
      id: req.query.id,
      ...req.body
    } as Film);
    if (status === Status.Successfull) {
      return res.redirect(redirectUrl);
    } else {
      return fail(res, message);
    }
  }
  private async CreateFilm(req: Request, res: Response){
    const result:IDBResponse<string> = await FilmRepository.Create(req.body)
    if(result.status === Status.Successfull){
      const redirectUrl = `/api/v1/${this.Pathname}?id=${result.message[0].id}&apiKey=${req.query.apiKey}`;
      return res.redirect(redirectUrl)
    }
    return fail(res, "check your request body")
  }
}
export default FilmsController;
