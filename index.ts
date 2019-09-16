import { Application, Request, Response } from 'express';
import film from './routes/film';
import Knex from 'knex';
const app: Application = require('express')();
import planet from './routes/planets';
import people from './routes/people';
const knex: Knex = require('knex')(require('./knexfile').development);
app.use('/films', film);
app.use('/planets', planet);
app.use('/people', people);
app.get('/test', (req: Request, res: Response) => {
  
});
app.listen(3000, () => console.log('server started on port 3000'));

