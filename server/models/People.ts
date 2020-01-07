import { ISpecieEntity as Specie } from '../types/interfaces/Specie';
import { ISubject, ISubjectFromApi } from '../types/interfaces/Subject';
import { IFromForeignTables } from '../types/interfaces/FromForeignTables';

export interface IPeople extends ISubject{
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

export enum PeopleEntityFields{
  Id = 'id',
  Name = 'name',
  Height = 'height',
  Mass = 'mass',
  HairColor = 'hair_color',
  SkinColor = 'skin_color',
  EyeColor = 'eye_color',
  BirthYear = 'birth_year',
  Gender = 'gender',
  Created = 'created',
  Edited = 'edited',
  Url = 'url'
}