import express from 'express'
import helmet from 'helmet';
import Express, { Application } from 'express';
import getPort from './utils/port-getter';
import { Authentication } from  './middlewares/authenticationMiddlewares';
import FilmsController from './Controllers/FilmsController';
import { IController } from './Controllers/Controller';
import PeopleController from './Controllers/PeopleController';
import PlanetController from './Controllers/PlanetController';
import SpeciesController from './Controllers/SpeciesController';
import StarshipController from './Controllers/StarshipController';
import VehicleController from './Controllers/VehicleController';
import UserController from './Controllers/UserController';

const App:Application = Express();

// REGISTER MIDDLEWARES
App
  .use(helmet())
  .use(express.json());

// REGISTER API CONTROLLERS 
// WITH COMMON MIDDLEWARES 
// AS ROUTER MIDDLEWARES
[
  new FilmsController(),
  new PeopleController(),
  new PlanetController(),
  new SpeciesController(),
  new StarshipController(),
  new VehicleController()
]
  .forEach((controller: IController)=> 
    App.use(
      `/api/v1/${controller.Pathname}`, 
      Authentication.CheckKeyIsProvided,
      Authentication.ValidateKey, 
      controller.Router()
    ));

App.use("/user", new UserController().Router())



 // START APP
   App
    .listen(getPort(process), () => console.log(`server started on port ${getPort(process)}`));
