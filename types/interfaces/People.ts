import { ISpecieEntity as Specie } from './Specie';
import { ISubject, ISubjectFromApi } from './Subject';
import { IFromForeignTables } from './FromForeignTables';

interface IPeople extends ISubject{
  height: string
  mass: string
  hair_color: string
  skin_color: string
  eye_color: string
  birth_year: string
  gender: string
  created: string
  edited: string
}

export interface IPeopleEntity extends IPeople{
  species: IFromForeignTables
  vehicles: IFromForeignTables[]
  starships: IFromForeignTables[]
}

export interface IPeopleFromApi extends IPeople{
  species: string
  vehicles: string[]
  starships: string[]
}