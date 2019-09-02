import {ISubject, ISubjectFromApi} from './Subject';
import { IFilmEntity } from './Film';
import { IPeopleEntity } from './People';

export interface IStarshipFromApi extends ISubjectFromApi{
  model: string
  manufacturer: string
  cost_in_credits: string
  length: string
  max_atmosphering_speed: string
  crew: string
  passengers: string
  cargo_capacity: string
  consumables: string
  hyperdrive_rating: string
  MGLT: string
  starship_class: string
  pilots: string[]
  films: string[]
  
}
export interface IStarshipEntity extends ISubject{
  model: string
  manufacturer: string
  cost_in_credits: string
  length: string
  max_atmosphering_speed: string
  crew: string
  passengers: string
  cargo_capacity: string
  consumables: string
  hyperdrive_rating: string
  MGLT: string
  starship_class: string
  pilots: IPeopleEntity[]
  films: IFilmEntity[]
}

export enum StarshipEntityFields {
  Id = 'id',
  Url = 'url',
  Name = 'name',
  Created = 'created',
  Edited = 'edited',
  Model = 'model',
  Manufacturer = 'manufacturer',
  CostInCredits = 'cost_in_credits',
  Length = 'length',
  MaxAtmospheringSpeed = 'max_atmosphering_speed',
  Crew = 'crew',
  Passengers = 'passengers',
  CargoCapacity = 'cargo_capacity',
  Consumables = 'consumables',
  HyperdriveRating = 'hyperdrive_rating',
  MGLT = 'MGLT',
  StarshipClass = 'starship_class'
}

export interface StarshipEntityFieldsArray{
  readonly [index: number]: StarshipEntityFields
}