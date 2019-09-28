
import { ISubject } from './Subject';
import { IFromForeignTables } from './FromForeignTables';

export interface IPlanet{
  getById: (id: string)=> ()=> Promise<IPlanetResponse>

}

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

export interface IPlanetResponse extends IPlanetEntity{
  residents:  IFromForeignTables[]
  films:      IFromForeignTables[]
}