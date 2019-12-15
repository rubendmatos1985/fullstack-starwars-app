import { Request, Response, NextFunction } from "express";

export namespace Edition{
    export namespace Authentication{
       export const CheckUserIsLogged = (req: Request, res: Response, next: NextFunction)=>{
           
          console.log("User is Logged");
          console.log("Giving access");
          
           next();     
        }
    }
}