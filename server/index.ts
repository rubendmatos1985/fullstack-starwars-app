//import regenerator from 'regenerator-runtime/runtime';
import express from 'express'
import { Application, Request, Response } from 'express';
import helmet from 'helmet';
import home from './routes/home';
const app: Application = require('express')();
import Joi from '@hapi/joi';
import path from 'path';
import getPort from './utils/port-getter';
import apiRoot from './routes/api/root';
import cors from 'cors';
app.use(helmet());
app.use(cors({ origin: 'http://localhost:3001' }));
app.use(helmet.hidePoweredBy());

app.use('/static', express.static(path.join(path.dirname(__dirname), 'public')))
app.use('/api/v1', apiRoot)
app.use('/', home)

app.listen(getPort(process), () => console.log(`server started on port ${getPort(process)}`));

