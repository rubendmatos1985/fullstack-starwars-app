import {Router, Request, Response} from 'express';
import { IFilmResponse as IFilm, IFilmResponse } from '../types/interfaces/Film';
import Film from '../controllers/Film';

const R:Router = Router();
const film = new Film();


R.get('/insert', async (req:Request, res:Response)=>{

})
R.get('/:id', async (req:Request, res:Response) => {
  const result: () => Promise<any> = film.getById(req.params.id);
    result()
      .then((film:IFilmResponse)=> res.json(film))
    });
R.get('/', async (req:Request, res:Response)=>{
  const films: Array<Promise<IFilm>> = await film.getAll()
  Promise.all(films)
    .then((films: any[])=> res.json(films)) 
})
 export default R;