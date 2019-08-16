import { Request, Response, Application } from 'express';
import Knex from 'knex';
const app:Application = require("express")();
const knex:Knex = require("knex")(require('./knexfile').development);

app.get('/films', async(req:Request, res:Response)=>{
 const r:JSON = await knex.select('*').from('film')
  res.json(r);
})

app.listen(3000, ()=> console.log("server started on port 3000"));