import * as express from 'express' 
import { Application, Request, Response } from 'express';
import film from './routes/film';
import * as helmet  from 'helmet';
const app: Application = require('express')();
import planet from './routes/planets';
import people from './routes/people';
import specie from './routes/species';
import vehicle from './routes/vehicle';
import starship from './routes/starship';
import { matchRoutes, MatchedRoute  } from 'react-router-config';
import Routes from '../client/routes';
type Port = string;
const getPort = (p:NodeJS.Process):(Port | 3000) => p && p.env && p.env.PORT ? p.env.PORT : 3000;

app.use(express.static('/build'))

app.use('/films', film);
app.use('/planets', planet);
app.use('/people', people);
app.use('/species', specie);
app.use('/vehicles', vehicle)
app.use('/starships', starship)
app.get('/', (req:any, res:any) =>{
  const promises = matchRoutes(Routes, req.path)
    .map(({ route, match })=> route.loadData ? route.loadData(match) : Promise.resolve(null))
    .map((promise) => {
        if (promise) {
            return new Promise((resolve, reject) => {
                promise.then(resolve).catch(resolve)
            });
        }
    })
    Promise.all(promises).then(() => {
		const context = {};
		//const content = renderer(req, /* store, */ context);

	/* 	if (context.url) {
			return res.redirect(301, context.url);
		}
		if (context.notFound) {
			res.status(404);
		} */
		//res.send(content);
	});
})  

app.use(helmet());
app.listen(getPort(process), () => console.log(`server started on port ${getPort(process)}`));

