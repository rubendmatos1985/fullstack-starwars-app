import { IPlanetEntity as Planet} from './Planet';
import { ISubject, ISubjectFromApi } from './Subject';

export interface ISpecieEntity extends ISubject{
  classification: string
  designation: string
  average_height: string
  skin_colors: string
  hair_colors: string
  eye_colors: string
  average_lifespan: string
  language: string
  homeworld: Planet
}

export interface ISpecieFromApi extends ISubjectFromApi{
  classification: string
  people: string[]
  films: string[]
  designation: string
  average_height: string
  skin_colors: string
  hair_colors: string
  eye_colors: string
  average_lifespan: string
  language: string
  homeworld: string
}