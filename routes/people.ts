import { Router, Request, Response } from 'express';
import People from '../controllers/People';

const R:Router = Router();


R.get('/:id', async (req: Request, res: Response)=>{
  People.getById(req.params.id)()
   .then((result:any) => res.json(result));
})


export default R;