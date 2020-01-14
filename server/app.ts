import express from 'express'
import helmet from 'helmet';
import Express, { Application } from 'express';
import getPort from './utils/port-getter';
import { Authentication } from  './middlewares/authentication';
import FilmsController from './Controllers/FilmsController';
import { IController } from './Controllers/Controller';
import PeopleController from './Controllers/PeopleController';
import PlanetController from './Controllers/PlanetController';
import SpeciesController from './Controllers/SpeciesController';
import StarshipController from './Controllers/StarshipController';
import VehicleController from './Controllers/VehicleController';
import UserController from './Controllers/UserController';
import { HomeController } from './Controllers/HomeController';

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
      Authentication.UpdateUserStatus, 
      controller.Router()
    ));

// REGISTER USER CONTROLLER
const userController = new UserController();    
const homeController = new HomeController()

App.use('/' + userController.Pathname, userController.Router())
App.use('/' + homeController.Pathname, homeController.Router())

App.get('/*', (req, res)=> res.redirect('/home') )



export default App;