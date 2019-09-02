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