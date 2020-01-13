import { IFilmFromApi } from '../../server/models/Film'//'../models/Film'
import { IPeopleFromApi } from '../../server/models/People'//'../models/People'
import { IPlanetFromApi } from '../../server/models/Planet'//'../models/Planet';
import { ISpecieFromApi } from '../../server/models/Specie'//'../models/Specie';
export interface IApiResponse{
  count: number
  next: string | null
  previous: string | null
  results: IFilmFromApi[] | IPeopleFromApi[] | IPlanetFromApi[] | ISpecieFromApi[]
}