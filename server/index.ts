//import regenerator from 'regenerator-runtime/runtime';
import express from 'express'
import { Application, Request, Response } from 'express';
import helmet from 'helmet';
const app: Application = require('express')();
import path from 'path';
import user from './routes/user';
import getPort from './utils/port-getter';
import apiRoot from './routes/api/root';
import cors from 'cors';
app.use(helmet());
app.use(express.json())
app.use(cors({ origin: 'http://localhost:3001' }));
app.use(express.static(path.join(path.dirname(__dirname), 'client', 'build')))
app.use('/api/v1', apiRoot)
app.use('/user', user)
app.listen(getPort(process), () => console.log(`server started on port ${getPort(process)}`));

