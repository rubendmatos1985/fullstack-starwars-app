import express from 'express'
import helmet from 'helmet';
import Express, { Application } from 'express';
import user from './routes/user';
import getPort from './utils/port-getter';
import ApiRoutes from './routes/api/root';
import { Api } from './controllers/Api';
import { Edition } from './controllers/Edition';
import EditionRoutes from './routes/edition';


const App:Application = Express();

App
   .use(helmet())
   
   .use(express.json())


   .use('/api/v1', Api.Authentication.CheckKeyIsProvided, Api.Authentication.ValidateKey,  ApiRoutes)

   .use('/edition', Edition.Authentication.CheckUserIsLogged, EditionRoutes)

   .use('/user', user)

   .listen(getPort(process), () => console.log(`server started on port ${getPort(process)}`));

