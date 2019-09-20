import { Application, Request, Response } from 'express';
import film from './routes/film';
import helmet  from 'helmet';
const app: Application = require('express')();
import planet from './routes/planets';
import people from './routes/people';
import specie from './routes/species';
import vehicle from './routes/vehicle';
import starship from './routes/starship';
import { matchRoutes } from 'react-router-config';
type Port = string;
const getPort = (p:NodeJS.Process):(Port | 3000) => p && p.env && p.env.PORT ? p.env.PORT : 3000;
app.use('/films', film);
app.use('/planets', planet);
app.use('/people', people);
app.use('/species', specie);
app.use('/vehicles', vehicle)
app.use('/starships', starship)
app.get('/',(req:Request, res:Response)=>{
    res.send('Ahhhhhhhhhhhhhhhhhhhh')
})  
app.use(helmet());
app.listen(getPort(process), () => console.log(`server started on port ${getPort(process)}`));

