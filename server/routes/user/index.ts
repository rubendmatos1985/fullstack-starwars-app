import Routes, { Router, Request, Response } from 'express';


const R:Router = Routes();

R.post('/signin',(req:Request, res: Response)=>{
    console.log(req.body)
    res.send('ok')
})

R.post('/login', (req: Request, res:Response)=>{
   console.log(req.body)
   res.send(req.body) 
})

R.post('/signout', (req:Request, res: Response)=>{
    console.log(req.body)
    res.send('ok')
})

export default R;