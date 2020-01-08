import { ISubjectFromApi, ISubject } from "../types/interfaces/Subject";
import { ITransportFromApi, ITransportEntity } from "../types/interfaces/Transport";
import { IFromForeignTables } from "./ViewModels/FromForeignTables";

interface Vehicle { 
  vehicle_class: string
 }

export interface IVehicleFromApi extends ISubjectFromApi, ITransportFromApi{
  vehicle_class: string
}

export interface IVehicleEntity extends Vehicle, ISubjectFromApi, ITransportEntity{}

export interface IVehicleViewModel extends IVehicleEntity{
  pilots: IFromForeignTables[],
  films: IFromForeignTables[]
}


export enum VehicleFieldsNames{
  Id = 'id',
  Name= 'name',
  Model = 'model',
  Manufacturer = 'manufacturer',
  CostInCredits = 'cost_in_credits',
  Lenght = 'length',
  MaxAtmospheringSpeed = 'max_atmosphering_speed',
  Crew = 'crew',
  Passengers = 'passengers',
  CargoCapacity = 'cargo_capacity',
  Consumables = 'consumables',
  VehicleClass = 'vehicle_class',
  Url = 'url'
}

export interface VehicleFieldsNamesArray{
  [key: number] : VehicleFieldsNames
}