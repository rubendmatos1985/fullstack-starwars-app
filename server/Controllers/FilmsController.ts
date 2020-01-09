import { Request, Response, Router } from 'express';
import { IFilmViewModel, FilmViewModelForeignFields } from '../models/ViewModels/FilmViewModel';
import FilmRepository from '../models/FilmRepository';
import { Controller } from './Controller';
import { IDBResponse } from '../DB';
import { Status } from '../middlewares/helpers';
import { Film } from '../models/Film';

interface IDeleteItemsRequestBody {
  fieldName: string
  itemIds: string[]
}

interface IAddItemsRequestBody {
  fieldName: string,
  itemIds: string[],
  filmId: string
}

interface DeleteItemsRequest extends Request {
  body: IDeleteItemsRequestBody
}

interface AddItemsRequest extends Request{
  body: IAddItemsRequestBody
}

interface UpdateContentRequest extends Request{
  body: Film
}

class FilmsController extends Controller {
  public constructor() {
    const pathname = "films"
    const router = () => {
      const r: Router = Router();
      r.get("/",        this.HandleQueryParams);
      r.post("/delete", this.DeleteFromFilm   )
      r.post("/add",    this.AddToFilm        )
      return r;
    }
    super(router, pathname)
  }

  private async GetAll(request: Request, response: Response): Promise<Response> {
    const result: IDBResponse<IFilmViewModel[]> | any = await FilmRepository.getAll();
    return response.json(result.message);
  }

  private async GetById(request: Request, response: Response): Promise<Response> {
    const result: IDBResponse<IFilmViewModel[]> | any = await FilmRepository.getById(request.query.id);
    return response.json(result.message);
  }


  private async GetByName(request: Request, response: Response): Promise<Response> {
    const result: IDBResponse<IFilmViewModel[]> | any = await FilmRepository.getByName(request.query.id);
    return response.json(result.message);
  }

  private async HandleQueryParams(req: Request, res: Response) {
    if (req.query.id) {
      return this.GetById(req, res)
    }

    if (req.query.name) {
      return this.GetByName(req, res)
    }

    return this.GetAll(req, res)
  }

  private async DeleteFromFilm(req: DeleteItemsRequest, res: Response) {
    const fieldNames: FilmViewModelForeignFields[] =
      ["characters", "vehicles", "planets", "species", "starships"] as FilmViewModelForeignFields[]

    const removers = [
      FilmRepository.removeCharacters,
      FilmRepository.removeVehicles,
      FilmRepository.removePlanets,
      FilmRepository.removeSpecies,
      FilmRepository.removeStarships
    ]
    return await Promise.all(
      new Array(fieldNames.length)
        .fill(this.RemoveItemHandler(req, res))
        .map((fn, i) => fn(fieldNames[i], removers[i]))
    )
  }

  private async AddToFilm(req: AddItemsRequest, res: Response){
    const fieldNames: FilmViewModelForeignFields[] =
      ["characters", "vehicles", "planets", "species", "starships"] as FilmViewModelForeignFields[]
    const adders = [
      FilmRepository.addCharacters,
      FilmRepository.addVehicles,
      FilmRepository.addPlanets,
      FilmRepository.addSpecies,
      FilmRepository.addStarships
    ]

    return await Promise.all(
      new Array(fieldNames.length)
        .fill(this.AddItemHandler(req, res))
        .map((fn, i) => fn(fieldNames[i], adders[i]))
    )
  }

  private RemoveItemHandler(req: Request, res: Response) {
    return async (field: FilmViewModelForeignFields, remover: (ids: string[]) => IDBResponse<any>) => {
      const fail = (message) => res.status(404).send({ status: "error", message })

      const redirectUrl = (`/api/v1/films?id=${req.query.id}&apiKey=${req.query.apiKey}`);

      const { fieldName, itemIds } = req.body;

      if (fieldName === field) {
        const { status, message } = await remover(itemIds)
        if (status === Status.Successfull) {
          return res.redirect(redirectUrl)
        }
        return fail(message)
      }
    }
  }

  private AddItemHandler(req: AddItemsRequest, res: Response){
    return async (field: FilmViewModelForeignFields, adder: (filmId: string, itemIds: string[])=>IDBResponse<any>)=>{
      const fail = (message) => res.status(404).send({ status: "error", message })

      const redirectUrl = (`/api/v1/films?id=${req.query.id}&apiKey=${req.query.apiKey}`);

      const { fieldName, itemIds, filmId } = req.body;

      if(fieldName === field){
        const { status, message } = await adder(filmId, itemIds)
        if(status === Status.Successfull){
          return res.redirect(redirectUrl)
        }
        return fail(message)
      }
    }
  }
  private UpdateFilmContent(req: UpdateContentRequest, res: Response){

  }
}







export default FilmsController;