import { IFromForeignTables } from "./FromForeignTables";
import { IPeople } from "../People";

export enum PeopleViewModelFields{
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
  Url = 'url',
  Species = 'species',
  Vehicles = 'vehicles',
  Starships = 'starships'
}

export interface IPeopleViewModel extends IPeople{
    species: IFromForeignTables[]
    vehicles: IFromForeignTables[]
    starships: IFromForeignTables[]
  }