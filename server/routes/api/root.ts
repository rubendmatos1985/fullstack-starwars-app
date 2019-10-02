import Router from 'express';
import film from "./film";
import planets from "./planets";
import people from "./people";
import specie from "./species";
import vehicle from "./vehicle";
import starship from "./starship";
const R = Router();
R.use('/films', film)
R.use('/planets', planets)
R.use('/people', people)
R.use('/species', specie)
R.use('/vehicles', vehicle)
R.use('/starships', starship)

export default R;