import express,{Router, Request, Response} from 'express';
import { IFilmResponse } from '../types/interfaces/Film';
import Film from '../models/Film';
const film:Router = express.Router();

film.get('/:id', async (req:Request, res:Response) => {
  const result: () => Promise<IFilmResponse> = Film.getById(req.params.id);
  result().then((film:IFilmResponse) => res.json(film));
});
film.get('/all', async (req:Request, res:Response)=>{
  
})
 export default film;