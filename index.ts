import { Request, Response, Application } from 'express';
import Knex from 'knex';
const app:Application = require("express")();
const knex:Knex = require("knex")(require('./knexfile').development);

app.get('/films', async(req:Request, res:Response)=>{

  const actors = await knex.select('*').from('film').where('id', '6b12f150-c8ff-11e9-bfa4-05fc89db7bdb')
  const characters = await knex.select('id','name').from('people').whereIn('id',(knex)=>{
   knex.select('people_id').from('actors').where('film_id', '6b12f150-c8ff-11e9-bfa4-05fc89db7bdb')
 }) 
  res.json({...actors, characters}); 
})

app.listen(3000, ()=> console.log("server started on port 3000"));