import { Request, Response, NextFunction } from "express";

export namespace Edition{
    export namespace Authentication{
       export const CheckUserIsLogged = (req: Request, res: Response, next: NextFunction)=>{
           
            // TO DO 
            // HANDLE USER LOGIN 
           next();     
        }
    }
}