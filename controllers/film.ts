import express,{Router, Request, Response} from 'express';
import { IFilmResponse as IFilm } from '../types/interfaces/Film';
import Film from '../models/Film';

const FilmRouter:Router = express.Router();
const film = new Film();

FilmRouter.get('/:id', async (req:Request, res:Response) => {
  const result: () => Promise<any> = film.getById(req.params.id);
    result()
      .then((film:IFilm) => res.json(film)); 
});
FilmRouter.get('/', async (req:Request, res:Response)=>{
  const films: Array<Promise<IFilm>> = await film.getAll()
  Promise.all(films)
    .then((films: any[])=> res.json(films)) 
})
 export default FilmRouter;