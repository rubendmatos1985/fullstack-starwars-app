import { Request, Response, Router, Application } from 'express';
import { IFilmViewModel } from '../models/Film';
import FilmRepository from '../models/FilmRepository';
import { Controller } from './Controller';
import { IDBResponse } from '../DB';

class FilmsController extends Controller{
  public constructor() {
    const pathname = "films"
    const router = () => {
      const r: Router = Router();
      r.get("/", this.HandleQueryParams);
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

  private async GetByName(request: Request, response: Response):Promise<Response>{
    const result: IDBResponse<IFilmViewModel[]> | any = await FilmRepository.getByName(request.query.id);
    return response.json(result.message);
  }

  private async HandleQueryParams(req:Request, res:Response){
    if(req.query.id){
      return this.GetById(req, res)
    }

    if(req.query.name){
      return this.GetByName(req, res)
    }

    return this.GetAll(req, res)
  }
}

export default FilmsController;