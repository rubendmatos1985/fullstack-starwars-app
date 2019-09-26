import Routes, { Router } from 'express';
import { Request, Response } from 'express';
import helmet from 'helmet';
import getPort from '../../utils/port-getter';

const R: Router = Routes();
R.use(helmet())

R.use('/home', (req: Request, res: Response) =>
  res.json({
    title: "Welcome to Starwars Api-Clone",
    about: {
      url: `http://${req.hostname}:${getPort(process)}/about`
    },
    login: {
      url: `http://${req.hostname}:${getPort(process)}/login`
    }
  })
)




export default R;