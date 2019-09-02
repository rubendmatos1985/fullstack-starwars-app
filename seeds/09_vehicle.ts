import * as Knex from "knex";
import { Table } from "../types/Tables";
import { IVehicleFromApi, IVehicleEntity, VehicleFields } from "../types/interfaces/Vehicle";
import mapData from "../utils/mapData";
import Api from "../api";

export async function seed(knex: Knex): Promise<any> {
    const data:IVehicleEntity[] = await mapData<IVehicleFromApi, IVehicleEntity>(Api.Vehicle,
      Object.keys(VehicleFields).map(key => VehicleFields[key as any]))    
    return knex(Table.Vehicle).del()
        .then(() => {
          return knex(Table.Vehicle).insert(data);
        });
};
