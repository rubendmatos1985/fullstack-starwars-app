import * as Knex from "knex";
import { Table, EntityTable } from "../types/Tables";
import Api from "../original_starwars_api";
import { IVehicleFromApi, VehicleFieldsNames } from "../types/interfaces/Vehicle";
import uuid from "uuid/v1";
import { knex } from "../DB";
import { PeopleEntityFields } from "../models/People";
import { flatten } from "ramda";
import { ExecException } from "child_process";

export async function seed(knex: Knex): Promise<any> {
  const vehiclesFromApi: IVehicleFromApi[] = await Api.Vehicle();
  const r = await buildPilotRelation(vehiclesFromApi);
  return knex(Table.Pilot).del()
    .then(() => {
      return knex(Table.Pilot).insert(r);
    });
};

const buildPilotRelation = async (vehicles: IVehicleFromApi[]) =>
  Promise.all(
    vehicles.map(async v => ({
      vehicle_id: await
        knex
          .select(VehicleFieldsNames.Id)
          .from(EntityTable.Vehicle)
          .where(VehicleFieldsNames.Url, v.url),
      people:
        await Promise.all(
          v.pilots.map(async (url: string) =>
            await knex
              .select(PeopleEntityFields.Id)
              .from(EntityTable.People)
              .where(PeopleEntityFields.Url, url)
          )
        )
    }))
  )
    .then(
      (vehicle: { vehicle_id: Array<{ id: string }>, people: any[] }[]) => vehicle.map(
        (obj) => ({
          vehicle_id: obj.vehicle_id[0].id,
          people: flatten(obj.people).map(v => v && v.id)
        })
      )
    )
    .then(
      (obj: { vehicle_id: string, people: string[] }[]) =>
        flatten(
          obj.map(
            ({ vehicle_id, people }) => people.reduce(
              (acc: any, people_id: string) => [...acc, { id: uuid(), vehicle_id, people_id }], []
            )
          )
        )
    )
    .catch((e:ExecException)=> console.log(e));
