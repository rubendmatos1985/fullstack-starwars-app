import {Router, Request, Response} from 'express';
import { IFilmResponse } from '../types/interfaces/Film';
import Film from '../controllers/Film';


const R:Router = Router();

R.get('/insert', async (req:Request, res:Response)=>{
  
 
})
R.get('/:id', (req:Request, res:Response) => {
  Film.getById(req.params.id)()
      .then((film:IFilmResponse)=> res.json(film))
    });
R.get('/', async (req:Request, res:Response)=>{
  const result = await Film.getAll();
  res.json(result); 
})
 export default R;