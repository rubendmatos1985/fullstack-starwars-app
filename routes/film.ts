import {Router, Request, Response} from 'express';
import { IFilmResponse as IFilm, IFilmResponse } from '../types/interfaces/Film';
import { FilmFields } from '../types/DB';
import Film from '../controllers/Film';
import { Table, EntityTable, ManyToManyTable } from '../types/Tables';
import { TableBuilder } from 'knex';
import { knex } from '../DB';


const R:Router = Router();

R.get('/insert', async (req:Request, res:Response)=>{
  
 
})
R.get('/:id', (req:Request, res:Response) => {
  Film.getById(req.params.id)()
      .then((film:IFilmResponse)=> res.json(film))
    });
R.get('/', async (req:Request, res:Response)=>{
  /* const films: Array<Promise<IFilm>> = await film.getAll()
  Promise.all(films)
    .then((films: any[])=> res.json(films)) */ 
})
 export default R;