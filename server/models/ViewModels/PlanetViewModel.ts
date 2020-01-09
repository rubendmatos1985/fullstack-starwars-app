import { IPlanetEntity } from "../Planet";
import { IFromForeignTables } from "./FromForeignTables";

export interface IPlanetViewModel extends IPlanetEntity {
  residents: IFromForeignTables[];
  films: IFromForeignTables[];
}
