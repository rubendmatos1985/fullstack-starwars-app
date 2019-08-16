import express from "express";
import fetchData from './utils/fetchData';
import formatData from './utils/formatData'
const app = express();


app.get('/users', async (req:any, res:any)=>{
  const r = await fetchData("https://swapi.co/api/films/");
  const data = formatData(r.results, [
    "title",
    "episode",
    "opening_crawl",
    "director",
    "producer",
    "realease_date",
    "created",
    "edited",
    "url"
])
  res.json(data);  
})

app.listen(3000, ()=> console.log("server started on port 3000"));