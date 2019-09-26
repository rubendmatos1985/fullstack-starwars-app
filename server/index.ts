//import regenerator from 'regenerator-runtime/runtime';
import express from 'express'
import { Application, Request, Response } from 'express';
import helmet from 'helmet';
const app: Application = require('express')();
import path from 'path';
import getPort from './utils/port-getter';
import apiRoot from './routes/api/root';
app.use('/static', express.static(path.join(path.dirname(__dirname), 'public')))
app.use('/api/v1', apiRoot)
app.use(helmet());
app.listen(getPort(process), () => console.log(`server started on port ${getPort(process)}`));

