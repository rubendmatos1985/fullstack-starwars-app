import express,{Router, Request, Response} from 'express';
import { IPlanetResponse } from '../../types/interfaces/Planet';
import  Planet  from '../../models/planet';

const R:Router = Router();

R.get('/:id', async (req:Request, res:Response)=>{
  const planet:IPlanetResponse = await Planet.getById(req.params.id)()
  res.json(planet);
})
R.get('/', async (req:Request, res:Response)=>{
  const r = await Planet.getAll(); 
  res.json(r);
})

export default R;