import { IFilmFromApi } from '../types/interfaces/Film'
import { IPeopleFromApi } from '../types/interfaces/People'
import { IPlanetFromApi } from '../types/interfaces/Planet';
import { ISpecieFromApi } from '../types/interfaces/Specie';
export interface IApiResponse{
  count: number
  next: string | null
  previous: string | null
  results: IFilmFromApi[] | IPeopleFromApi[] | IPlanetFromApi[] | ISpecieFromApi[]
}