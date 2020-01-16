import Knex from 'knex';
import { OneToManyTable, Table } from '../types/Tables';
import { PeopleEntityFields } from '../models/People';
import Api from '../original_starwars_api';
import { knex } from '../DB';
import { ISpecieFromApi, ISpecieEntityFields } from '../models/Specie';
import { flatten } from 'ramda';
import { IRace } from '../models/Races';
import uuid from 'uuid/v1';

export async function seed(knex: Knex): Promise<any> {
  const speciesFromApi: ISpecieFromApi[] = await Api.Specie();
  const races: IRace[] = await buildRaceRelation(speciesFromApi);
  return knex(OneToManyTable.Race)
    .del()
    .then(() => {
      return knex(OneToManyTable.Race).insert(races);
    })
    .catch((e) => console.log('SEED RACE ERROR->', e));
}

const buildRaceRelation = async (s: ISpecieFromApi[]): Promise<IRace[]> =>
  await Promise.all(
    s.map(async (sp) => ({
      id: await knex
        .select(ISpecieEntityFields.Id)
        .from(Table.Specie)
        .where(ISpecieEntityFields.Url, sp.url)
        .then((v) => flatten(v).map((v) => v.id)[0])
        .catch((e) => console.log('ERROR FETCHING TABLE SPECIE', e)),
      people: await Promise.all<{ id: string }[]>(
        sp.people.map(
          async (url: string) =>
            await knex
              .select(PeopleEntityFields.Id)
              .from(Table.People)
              .where(PeopleEntityFields.Url, url)
        )
      )
        .then((v) => flatten(v).map((v) => v.id))
        .catch((e) => console.log('ERROR FETCHING TABLE PEOPLE', e))
    }))
  ).then((objects: { id: string; people: string[] }[]) =>
    objects
      .map(({ id, people }) =>
        people.reduce(
          (acc: any, people_id: string) => [
            ...acc,
            {
              id: uuid(),
              specie_id: id,
              people_id
            }
          ],
          []
        )
      )
      .reduce((acc, curr) => [...acc, ...curr], [])
  );
