const app = require("express")();
const knex = require("knex")(require('./knexfile').development);
const getDataFromApi = require('./fetchData');
app.get('/users', async (req, res)=>{
  const r = await knex
    .select('*')
    .from('planet')
    .where('id', '63d28a10-b908-11e9-b24b-2192b1684a4e')
  
  res.json(r);  
})
app.get('/', async(req, res)=>{
  const r = await getDataFromApi('https://swapi.co/api/planets/');
  console.log(Object.keys(r));
  res.json(r);
})

app.listen(3000, ()=> console.log("server started on port 3000"));