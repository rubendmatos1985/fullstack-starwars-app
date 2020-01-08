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
      r.get("/", this.GetAll);
      r.get("/:id", this.GetById)
      return r;
    }
    super(router, pathname)
  }
  
  public async GetAll(request: Request, response: Response): Promise<Response> {
    const result: IDBResponse<IFilmViewModel[]> | any = await FilmRepository.getAll();
    return response.json(result.message);
  }

  public async GetById(request: Request, response: Response): Promise<Response> {
    const result: IDBResponse<IFilmViewModel[]> | any = await FilmRepository.getById(request.params.id);
    return response.json(result.message);
  }
}

export default FilmsController;