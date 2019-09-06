import express,{Router, Request, Response} from 'express';
import { IPlanetResponse } from '../types/interfaces/Planet';
import Planet from '../controllers/Planet';

const R:Router = Router();

R.get('/:id', (req:Request, res:Response)=>{
 
})