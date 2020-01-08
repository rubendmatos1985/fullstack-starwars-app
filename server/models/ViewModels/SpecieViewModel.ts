import { ISpecieEntity } from "../Specie";
import { IFromForeignTables } from "../../types/interfaces/FromForeignTables";

export interface ISpecieViewModel extends ISpecieEntity{
    people: IFromForeignTables[],
    films: IFromForeignTables[]
  }