import {ISubject, ISubjectFromApi} from '../types/interfaces/Subject';
import { ITransportFromApi, ITransportEntity } from '../types/interfaces/Transport';
import { IFromForeignTables } from '../types/interfaces/FromForeignTables';
interface IStarship{
  hyperdrive_rating: string
  MGLT: string
  starship_class: string
}

export interface IStarshipFromApi extends IStarship, ISubjectFromApi, ITransportFromApi{}
export interface IStarshipEntity extends IStarship ,ISubject, ITransportEntity{}

export interface IStarshipResponse extends IStarshipEntity{
  pilots: IFromForeignTables[],
  films: IFromForeignTables[]
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