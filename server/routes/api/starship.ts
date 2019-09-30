import { Router, Request, Response } from 'express';
import  Starship  from '../../models/starship';

const R = Router();

R.get('/:id', async (req:Request, res:Response)=>{
    const result = await Starship.getById(req.params.id)
    res.json(result)
})

R.get('/', async (req: Request, res: Response)=>{
    const result = await Starship.getAll();
    res.json(result)
})


export default R;