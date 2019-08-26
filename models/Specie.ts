import { Planet } from './Planet';
export interface Specie{
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