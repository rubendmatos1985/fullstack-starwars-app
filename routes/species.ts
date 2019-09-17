import { Router, Request, Response } from 'express';
import Specie from '../controllers/Specie';
const R = Router();

R.get('/:id', async (req:Request, res:Response)=>{
   const result = await  Specie.getById(req.params.id)();
   res.json(result);
})

R.get('/', async (req:Request, res: Response)=>{
  const result = await Specie.getAll();
  res.json(result);
})


export default R;