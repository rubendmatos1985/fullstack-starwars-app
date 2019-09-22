import * as Knex from "knex";
import { Table } from "../types/Tables";
import { IVehicleFromApi, IVehicleEntity, VehicleFieldsNames } from "../types/interfaces/Vehicle";
import mapData from "../utils/mapData";
import Api from "../original_starwars_api";

export async function seed(knex: Knex): Promise<any> {
    const data:IVehicleEntity[] = await mapData<IVehicleFromApi, IVehicleEntity>(Api.Vehicle,
        [
          VehicleFieldsNames.Name,
          VehicleFieldsNames.Model,
          VehicleFieldsNames.Manufacturer,
          VehicleFieldsNames.CostInCredits,
          VehicleFieldsNames.Lenght,
          VehicleFieldsNames.MaxAtmospheringSpeed,
          VehicleFieldsNames.Crew,
          VehicleFieldsNames.Passengers,
          VehicleFieldsNames.CargoCapacity,
          VehicleFieldsNames.Consumables,
          VehicleFieldsNames.VehicleClass,
          VehicleFieldsNames.Url
       ]

       )    
    return knex(Table.Vehicle).del()
        .then(() => {
          return knex(Table.Vehicle).insert(data);
        });
};
