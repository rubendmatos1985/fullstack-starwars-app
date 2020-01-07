import { IFromForeignTables } from "../../types/interfaces/FromForeignTables";
import { IPeople } from "../People";

export interface IPeopleViewModel extends IPeople{
    species: IFromForeignTables[]
    vehicles: IFromForeignTables[]
    starships: IFromForeignTables[]
  }