import {Router, Request, Response} from 'express';
import { IFilmResponse } from '../types/interfaces/Film';
import { Film } from '../controllers/Film';


const R:Router = Router();

R.get('/insert', async (req:Request, res:Response)=>{
  
 
})
R.get('/:id', async (req:Request, res:Response) => {
 const result:IFilmResponse = await Film.getById(req.params.id)()
  res.json(result);   
});
R.get('/', async (req:Request, res:Response)=>{
  const result = await Film.getAll();
  res.json(result); 
})
 export default R;