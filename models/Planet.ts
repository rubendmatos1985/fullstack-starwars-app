import { People } from './People';
import { Film } from './Film';
export interface Planet{
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