import { IPeopleEntity as People } from './People';
import { IFilmEntity as Film } from './Film';
export interface IPlanetEntity{
  id: string
  name: string
  rotation_period: string
  orbital_period: string
  diameter: string
  climate: string
  gravity: string
  terrain: string
  surface_water: string
  population: string
  residents: People[]
  films: Film[]
}
export interface IPlanetFromApi{
  name: string
  rotation_period: string
  orbital_period: string
  diameter: string
  climate: string
  gravity: string
  terrain: string
  surface_water: string
  population: string
  residents: string[]
  films: string[]
  created: string
  edited: string
  url: string
}