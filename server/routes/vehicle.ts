import { Router, Response, Request } from 'express';
import Vehicle  from '../controllers/vehicle';

const R:Router = Router();

R.get('/:id', async (req:Request, res:Response)=>{
  const result = await Vehicle.getById(req.params.id)()
  res.json(result);    
})

R.get('/', async (req: Request, res: Response)=>{
  const result = await Vehicle.getAll();
  res.json(result);
})

export default R;