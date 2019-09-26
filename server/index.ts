//import regenerator from 'regenerator-runtime/runtime';
import express from 'express'
import { Application, Request, Response } from 'express';
import film from './routes/film';
import helmet from 'helmet';
const app: Application = require('express')();
import planet from './routes/planets';
import people from './routes/people';
import specie from './routes/species';
import vehicle from './routes/vehicle';
import starship from './routes/starship';

import path from 'path';
import getPort from './utils/port-getter';
app.use('/static', express.static(path.join(path.dirname(__dirname), 'client', 'dist')))
app.use('/api/v1/films', film);
app.use('/api/v1/planets', planet);
app.use('/api/v1/people', people);
app.use('/api/v1/species', specie);
app.use('/api/v1/vehicles', vehicle)
app.use('/api/v1/starships', starship)
app.get('/*', (req: any, res: any, next:express.NextFunction) => {
  
})
console.log()
app.use(helmet());
app.listen(getPort(process), () => console.log(`server started on port ${getPort(process)}`));

