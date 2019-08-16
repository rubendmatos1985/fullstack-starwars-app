import express from "express";
const knexfile = require('../knexfile');
const app = express();
const knex = require("knex")(knexfile.development);

app.get('/users', async (req:any, res:any)=>{
  const r = await knex
    .select('*')
    .from('planet')
    .where('id', '63d28a10-b908-11e9-b24b-2192b1684a4e')
  
  res.json(r);  
})

app.listen(3000, ()=> console.log("server started on port 3000"));