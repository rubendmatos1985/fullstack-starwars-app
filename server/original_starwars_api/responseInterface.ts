import { IFilmFromApi } from '../models/Film'
import { IPeopleFromApi } from '../models/People'
import { IPlanetFromApi } from '../models/Planet';
import { ISpecieFromApi } from '../types/interfaces/Specie';
export interface IApiResponse{
  count: number
  next: string | null
  previous: string | null
  results: IFilmFromApi[] | IPeopleFromApi[] | IPlanetFromApi[] | ISpecieFromApi[]
}