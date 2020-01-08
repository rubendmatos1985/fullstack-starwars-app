import { IVehicleEntity } from "../Vehicle";
import { IFromForeignTables } from "../../types/interfaces/FromForeignTables";

export interface IVehicleViewModel extends IVehicleEntity{
    pilots: IFromForeignTables[],
    films: IFromForeignTables[]
  }