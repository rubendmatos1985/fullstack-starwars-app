import { ISpecieEntity as Specie } from './Specie';
import { ISubject, ISubjectFromApi } from './Subject';
export interface IPeopleEntity extends ISubject{
  height: string
  mass: string
  hair_color: string
  skin_color: string
  eye_color: string
  birth_year: string
  gender: string
  created: string
  edited: string
  species: Specie
}

export interface IPeopleFromApi extends ISubjectFromApi{
  height: string
  mass: string
  hair_color: string
  skin_color: string
  eye_color: string
  birth_year: string
  gender: string
  species: string
  vehicles: string[]
  starships: string[]
}