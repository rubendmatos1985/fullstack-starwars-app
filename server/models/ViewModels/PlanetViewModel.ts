import { IPlanetEntity } from "../Planet";
import { IFromForeignTables } from "../../types/interfaces/FromForeignTables";

export interface IPlanetViewModel extends IPlanetEntity{
    residents:  IFromForeignTables[]
    films:      IFromForeignTables[]
  }