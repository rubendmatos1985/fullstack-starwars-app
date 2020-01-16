import { ISubjectFromApi } from './Subject';
import { ITransportFromApi, ITransportEntity } from './Transport';

/* interface Vehicle {
  vehicle_class: string;
} */

export interface IVehicleFromApi extends ISubjectFromApi, ITransportFromApi {
  vehicle_class: string;
}

export interface IVehicleEntity extends Vehicle, ISubjectFromApi, ITransportEntity {}

export enum VehicleFieldsNames {
  Id = 'id',
  Name = 'name',
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

export namespace VehicleFields {
  export type id = string;
  export type name = string | null;
  export type model = string | null;
  export type manufacturer = string | null;
  export type cost_in_credits = string | null;
  export type length = string | null;
  export type max_atmosphering_speed = string | null;
  export type crew = string | null;
  export type passengers = string | null;
  export type cargo_capacity = string | null;
  export type consumables = string | null;
  export type vehicle_class = string | null;
  export type url = string | null;
}

export interface Vehicle {
  id: VehicleFields.id;
  name: VehicleFields.name;
  model: VehicleFields.model;
  manufacturer: VehicleFields.manufacturer;
  cost_in_credits: VehicleFields.cost_in_credits;
  length: VehicleFields.length;
  max_atmosphering_speed: VehicleFields.max_atmosphering_speed;
  crew: VehicleFields.crew;
  passengers: VehicleFields.passengers;
  cargo_capacity: VehicleFields.cargo_capacity;
  consumables: VehicleFields.consumables;
  vehicle_class: VehicleFields.vehicle_class;
  url: VehicleFields.url;
}

export interface VehicleFieldsNamesArray {
  [key: number]: VehicleFieldsNames;
}
