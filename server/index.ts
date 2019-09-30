//import regenerator from 'regenerator-runtime/runtime';
import express from 'express'
import helmet from 'helmet';
import Express, { Application } from 'express';
import user from './routes/user';
import getPort from './utils/port-getter';
import apiRoot from './routes/api/root';
import uuid from 'uuid/v4'; // random

export const jwtSecretKey:string = uuid();

const app:Application = Express();

app.use(helmet())
app.use(express.json())


app.use('/api/v1', apiRoot)
app.use('/user', user)
app.listen(getPort(process), () => console.log(`server started on port ${getPort(process)}`));

