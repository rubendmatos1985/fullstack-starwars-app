import * as Knex from "knex";
import { ManyToManyTable, EntityTable } from "../types/Tables";
import { Resident, ResidentFields, PeopleFields, PlanetFields } from "../types/DB";
import uuid from 'uuid/v1';
import { IPlanetFromApi } from "../types/interfaces/Planet";
import Api from '../api/';
export async function seed(knex: Knex): Promise<any> {
  const residentsRelation: Array<{ people: { id: PeopleFields.id }[]; planet: { id: PlanetFields.id }[] }>
    = await makeResidentRelation(knex);

  return knex(ManyToManyTable.Resident).del()
    .then(() => {
      return knex(ManyToManyTable.Resident).insert(buildResidents(residentsRelation));
    });
};


const makeResidentRelation: (
  k: Knex
) => Promise<Array<{ people: { id: PeopleFields.id }[]; planet: { id: PlanetFields.id }[] }>>
  = async (knex: Knex) => {
    const planets: Array<IPlanetFromApi> = await Api.Planet();
    const peopleWithPlanets: Promise<{ planet: { id: string }[]; people: { id: string }[] }>[] = planets.map(
      async (planet: IPlanetFromApi) => ({
        planet: await knex
          .select('id')
          .from(EntityTable.Planet)
          .where('url', planet.url),

        people: await knex
          .select('id')
          .from(EntityTable.People)
          .whereIn('url', planet.residents)
      })
    );
    return Promise.all(peopleWithPlanets);
  };

const buildResidents: (
  residents: Array<{ planet: { id: PlanetFields.id }[]; people: { id: PeopleFields.id }[] }>
) => Array<Resident> = (residents) =>
    residents
      .map((obj) =>
        obj.people.reduce(
          (acc: Array<Resident>, curr: { id: string }) => [
            ...acc,
            {
              id: uuid() as ResidentFields.id,
              planet_id: obj.planet[0].id,
              people_id: curr.id
            }
          ],
          []
        )
      )
      .reduce((acc: Resident[], curr: any) => [...acc, ...curr]);
