const app = require("express")();
const knex = require("knex")(require('./knexfile').development);

app.get('/films', async(req, res)=>{
 const r = await knex.select('*')
    .from('film')
  res.json(r);
})

app.listen(3000, ()=> console.log("server started on port 3000"));