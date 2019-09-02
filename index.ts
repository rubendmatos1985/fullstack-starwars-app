import { Application } from 'express';
import film from './controllers/film';
const app: Application = require('express')();


app.use('/films', film);

app.listen(3000, () => console.log('server started on port 3000'));
