import { IFilmFromApi } from '../interfaces/Film'
import { IPeopleFromApi } from '../interfaces/People'
import { IPlanetFromApi } from '../interfaces/Planet';
import { ISpecieFromApi } from '../interfaces/Specie';
export interface IApiResponse{
  count: number
  next: string | null
  previous: string | null
  results: IFilmFromApi[] | IPeopleFromApi[] | IPlanetFromApi[] | ISpecieFromApi[]
}