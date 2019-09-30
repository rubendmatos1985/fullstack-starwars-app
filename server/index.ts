//import regenerator from 'regenerator-runtime/runtime';
import express from 'express'
import { Application, Request, Response } from 'express';
import helmet from 'helmet';
const app: Application = require('express')();
import path from 'path';
import user from './routes/user';
import getPort from './utils/port-getter';
import apiRoot from './routes/api/root';
import session from 'express-session';
import settings from './settings';
import connectPgSimple, { PGStore, PGStoreOptions } from 'connect-pg-simple';
import { Pool } from 'pg';
import uuid from 'uuid/v1';
const pgPool: Pool = new Pool({
  host: settings.host,
  password: settings.password,
  user: settings.user,
  database: "starwars",
  port: 5432,
  ssl: true
});
const pgSession = connectPgSimple(session);
app.use(helmet())
app.use(express.json())

app.use(session({
  store: new pgSession({
    pool: pgPool,
    tableName: 'user_session'
  }),
  secret: uuid(),
  resave: false,
  cookie: { 
    maxAge: 1000 * 60 * 60,
    httpOnly: true 
  },
  saveUninitialized: true
}))
app.use('/api/v1', apiRoot)
app.use('/user', user)
app.listen(getPort(process), () => console.log(`server started on port ${getPort(process)}`));

