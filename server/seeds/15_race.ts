import * as Knex from "knex";
import { OneToManyTable, EntityTable, Table } from "../types/Tables";
import { IPeopleFromApi, IPeopleEntityFields } from "../types/interfaces/People";
import Api from "../original_starwars_api";
import { IPlanetFromApi } from "../types/interfaces/Planet";
import { knex } from "../DB";
import { asyncCompose } from "../utils/asyncCompose";
import { ISpecieFromApi, ISpecieEntityFields } from "../types/interfaces/Specie";
import { flatten } from "ramda";
import { IRace } from "../types/interfaces/Races";
import uuid from "uuid/v1";


export async function seed(knex: Knex): Promise<any> {
  const speciesFromApi: ISpecieFromApi[] = await Api.Specie();
  const races: IRace[] = await buildRaceRelation(speciesFromApi);
  return knex(OneToManyTable.Race).del()
    .then(() => {
      return knex(OneToManyTable.Race).insert(races);
    });
};

const buildRaceRelation = async (s: ISpecieFromApi[]): Promise<IRace[]> =>
  await Promise.all(
    s.map(
      async (sp) => ({
        id: await knex
          .select(ISpecieEntityFields.Id)
          .from(Table.Specie)
          .where(ISpecieEntityFields.Url, sp.url)
          .then(v => flatten(v).map(v => v.id)[0]),

        people: await Promise.all<{ id: string }[]>(
          sp.people.map(async (url: string) => await knex
            .select(IPeopleEntityFields.Id)
            .from(Table.People).where(IPeopleEntityFields.Url, url))
        )
          .then(v => flatten(v).map(v => v.id))

      })
    )
  )
    .then(
      (objects: { id: string, people: string[] }[]) =>
        objects
          .map(({ id, people }) => people.reduce((acc: any, people_id: string) => ([
            ...acc,
            {
              id: uuid(),
              specie_id: id,
              people_id
            }
          ]), [])
          )
          .reduce((acc, curr) => ([...acc, ...curr]), [])
    )

