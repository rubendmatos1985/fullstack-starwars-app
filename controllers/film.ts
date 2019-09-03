import express,{Router, Request, Response} from 'express';
import { IFilmResponse as IFilm } from '../types/interfaces/Film';
import Film from '../models/Film';

const film:Router = express.Router();
const filmMethods = new Film();
film.get('/:id', async (req:Request, res:Response) => {
 console.log("WRONG")
  const result: () => Promise<any> = filmMethods.getById(req.params.id);
    result()
      .then((film:IFilm) => res.json(film)); 
});
film.get('/', async (req:Request, res:Response)=>{
  const films = await filmMethods.getAll()
  Promise.all(films)
    .then((films: any[])=> res.json(films)) 
})
 export default film;