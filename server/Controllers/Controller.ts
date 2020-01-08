import { Router } from "express";
import autoBind = require("auto-bind");

export interface IController{
   Router():Router
   Pathname: string
}

class MethodsBinder{
   constructor(){
      autoBind(this)
   }
}

export class Controller extends MethodsBinder implements IController {
   public Router: ()=> Router
   public Pathname: string
   constructor(router: ()=> Router, path: string){
      super()
      this.Router = router
      this.Pathname = path
   }
}