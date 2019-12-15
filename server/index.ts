import express from 'express'
import helmet from 'helmet';
import Express, { Application } from 'express';
import getPort from './utils/port-getter';
import { Authentication } from  './middlewares/authenticationMiddlewares';
import FilmsController from '../MVC/Controllers/FilmsController';
import { IController } from '../MVC/Controllers/Controller';
import PeopleController from '../MVC/Controllers/PeopleController';
import PlanetController from '../MVC/Controllers/PlanetController';
import SpeciesController from '../MVC/Controllers/SpeciesController';
import StarshipController from '../MVC/Controllers/StarshipController';
import VehicleController from '../MVC/Controllers/VehicleController';

const App:Application = Express();

[
  new FilmsController(),
  new PeopleController(),
  new PlanetController(),
  new SpeciesController(),
  new StarshipController(),
  new VehicleController()
]
  .forEach((controller: IController)=> 
    App.use(`/api/v1/${controller.Pathname}`, controller.Router()));

App
  .use(helmet())
  .use(express.json())

   //.use('/api/v1', Authentication.CheckKeyIsProvided, Validation.ValidateKey,  ApiRoutes)

/*    .use('/edition', Authentication.CheckUserIsLogged, EditionRoutes) */

 /*   .use('/user', user)
 */

   .listen(getPort(process), () => console.log(`server started on port ${getPort(process)}`));
