import { IVehicleEntity } from "../Vehicle";
import { IFromForeignTables } from "./FromForeignTables";

export interface IVehicleViewModel extends IVehicleEntity {
  pilots    : IFromForeignTables[];
  films     : IFromForeignTables[];
}
