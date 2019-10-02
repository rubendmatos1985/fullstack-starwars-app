import { Request, Response, NextFunction, Router } from "express";

const AddRoutes = Router();

// TO DO ---> ADD FUNCTIONALITES

AddRoutes
    .post('/film', (req: Request, res: Response, next: NextFunction) => { res.send(req.body) })
    
    .post('/character', (req: Request, res: Response, next: NextFunction) => { res.send(req.body) })
    
    .post('/starship', (req: Request, res: Response, next: NextFunction) => { res.send(req.body) })
    
    .post('/vehicle', (req: Request, res: Response, next: NextFunction) => { res.send(req.body) })
    
    .post('/specie', (req: Request, res: Response, next: NextFunction) => { res.send(req.body) })

    .post('/planet', (req: Request, res: Response, next: NextFunction)=>{ res.send(req.body) })

export default AddRoutes;