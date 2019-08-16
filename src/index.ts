import express from "express";
const knexfile = require('../knexfile');
const app = express();
const knex = require("knex")(knexfile.development);

app.get('/users', async (req:any, res:any)=>{

})

app.listen(3000, ()=> console.log("server started on port 3000"));