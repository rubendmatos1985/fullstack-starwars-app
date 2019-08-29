import { Request, Response, Application } from 'express';
import { IFilmEntity }from './interfaces/Film'
const app:Application = require("express")();
import Film from './models/Film';
app.get('/films/:id', async (req:Request, res:Response)=>{
  const result:()=>any = await Film.getById(req.params.id)
  res.json(result())  
})

app.listen(3000, ()=> console.log("server started on port 3000"));