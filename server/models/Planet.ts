import { ISubject } from './Subject';
import { IFromForeignTables } from './ViewModels/FromForeignTables';

export interface IPlanetEntity extends ISubject {
  rotation_period: string;
  orbital_period: string;
  diameter: string;
  climate: string;
  gravity: string;
  terrain: string;
  surface_water: string;
  population: string;
}
export interface IPlanetFromApi extends IPlanetEntity {
  residents: string[];
  films: string[];
}
export interface Planet {
  id: PlanetFields.id;
  name: PlanetFields.name;
  rotation_period: PlanetFields.rotation_period;
  orbital_period: PlanetFields.orbital_period;
  diameter: PlanetFields.diameter;
  climate: PlanetFields.climate;
  gravity: PlanetFields.gravity;
  terrain: PlanetFields.terrain;
  surface_water: PlanetFields.surface_water;
  population: PlanetFields.population;
  url: PlanetFields.url;
}

export namespace PlanetFields {
  export type id = string;
  export type name = string | null;
  export type rotation_period = string | null;
  export type orbital_period = string | null;
  export type diameter = string | null;
  export type climate = string | null;
  export type gravity = string | null;
  export type terrain = string | null;
  export type surface_water = string | null;
  export type population = string | null;
  export type url = string | null;
}
