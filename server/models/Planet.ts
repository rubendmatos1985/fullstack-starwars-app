
import { ISubject } from '../types/interfaces/Subject';
import { IFromForeignTables } from '../types/interfaces/FromForeignTables';


export interface IPlanetEntity extends ISubject{
  rotation_period: string
  orbital_period:  string
  diameter:        string
  climate:         string
  gravity:         string
  terrain:         string
  surface_water:   string
  population:      string
}
export interface IPlanetFromApi extends IPlanetEntity{
  residents: string[]
  films:     string[]
}
