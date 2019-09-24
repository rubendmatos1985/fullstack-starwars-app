import 'regenerator-runtime/runtime';
import * as express from 'express'
import { Application, Request, Response } from 'express';
import film from './routes/film';
import helmet from 'helmet';
const app: Application = require('express')();
import planet from './routes/planets';
import people from './routes/people';
import specie from './routes/species';
import vehicle from './routes/vehicle';
import starship from './routes/starship';
import { matchRoutes, MatchedRoute } from 'react-router-config';
import Routes from '../client/routes';
import getPort from './utils/port-getter';
import renderer from './utils/renderer';

app.use('/public', express.static('public'))

app.use('/api/v1/films', film);
app.use('/api/v1/planets', planet);
app.use('/api/v1/people', people);
app.use('/api/v1/species', specie);
app.use('/api/v1/vehicles', vehicle)
app.use('/api/v1/starships', starship)
app.get('/*', (req: any, res: any, next:express.NextFunction) => {
  const promises = matchRoutes(Routes, req.path)
    .map(({ route, match }) => route.loadData ? route.loadData(match) : Promise.resolve(null))
    .map((promise:Promise<any>) => promise && new Promise((resolve, reject) => 
          promise.then(resolve).catch(resolve)
        ))
   if(promises.length > 0){
    Promise.all(promises).then(() => res.send(renderer(req)));
   }else{
     next()
    } 
})
//app.use('/*', (req, res)=> res.json({message: 'Not Found'}))
app.use(helmet());
app.listen(getPort(process), () => console.log(`server started on port ${getPort(process)}`));

