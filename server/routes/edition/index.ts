import { Router, Request, Response, NextFunction } from "express";
import AddRoutes from "./addRoutes";

const EditionRoutes = Router();

EditionRoutes   /*  TO DO */
  .use('/add', /* MIDDLEWARE TO CHECK USER PERMISSIONS */ AddRoutes)
  
  .use('/delete', (req:Request, res:Response, next: NextFunction)=>{  res.send('Delete something') })
  
  .use('/update', (req:Request, res:Response, next: NextFunction)=>{  res.send('Update something') })



export default EditionRoutes;