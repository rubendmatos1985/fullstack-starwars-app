import { Request, Response, Router, Application } from 'express';
import { IFilmViewModel } from '../models/Film';
import FilmRepository from '../models/FilmRepository';
import { IController } from './Controller';

class FilmsController implements IController{
  
  public Router: ()=> Router;
  
  public Pathname: string
  
  public constructor() {
    this.Router = () => {
      const router: Router = Router();
      router.get("/", this.GetAll);
      router.get("/:id", this.GetById)
      return router;
    }
    this.Pathname = "films"
  }
  
  public async GetAll(request: Request, response: Response): Promise<Response> {
    const result: IFilmViewModel[] = await FilmRepository.getAll();
    return response.json(result);
  }

  public async GetById(request: Request, response: Response): Promise<Response> {
    const result: IFilmViewModel[] = await FilmRepository.getById(request.params.id);
    return response.json(result);
  }
}

export default FilmsController;