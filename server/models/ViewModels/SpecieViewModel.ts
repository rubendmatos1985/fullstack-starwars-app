import { ISpecieEntity } from "../Specie";
import { IFromForeignTables } from "./FromForeignTables";

export interface ISpecieViewModel extends ISpecieEntity{
    people: IFromForeignTables[],
    films: IFromForeignTables[]
  }