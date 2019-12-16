import { Request, Response, Router, Application } from 'express';
import { IFilmResponse } from '../types/interfaces/Film';
import Film from '../models/film';
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
    const result: IFilmResponse[] = await Film.getAll();
    return response.json(result);
  }

  public async GetById(request: Request, response: Response): Promise<Response> {
    const result: IFilmResponse = await Film.getById(request.params.id)();
    return response.json(result);
  }
}

export default FilmsController;