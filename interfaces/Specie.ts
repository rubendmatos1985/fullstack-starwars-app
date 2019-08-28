import { IPlanetEntity as Planet} from './Planet';
export interface ISpecieEntity{
  id: string
  name: string
  classification: string
  designation: string
  average_height: string
  skin_colors: string
  hair_colors: string
  eye_colors: string
  average_lifespan: string
  language: string
  url: string
  homeworld: Planet
}

export interface ISpecieFromApi{
  name: string
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
  url: string
  homeworld: string
  created: string
  edited: string
}