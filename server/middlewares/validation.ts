import { Request, Response, NextFunction } from "express";

export namespace Validation{
    export function CheckItemIdIsProvided(req:Request, res:Response, next:NextFunction){
        if(req.query.id){
            return next();
        }
        return res.status(400).json({ status: "Error", message: "item id not provided" })
    }
}