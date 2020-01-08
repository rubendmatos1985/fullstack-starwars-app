import * as Knex from "knex";
import { ManyToManyTable, EntityTable } from "../types/Tables";
import { IStarshipFromApi, StarshipEntityFields } from "../models/Starship";
import Api from "../original_starwars_api";
import { knex } from "../DB";
import { PeopleEntityFields } from "../models/People";
import { flatten } from "ramda";
import uuid from "uuid/v1";
import { StarshipPilot } from "../types/interfaces/StarshipPilot";

export async function seed(knex: Knex): Promise<any> {
  const starshipFromApi: IStarshipFromApi[] = await Api.Starship();
  const starshipPilot:StarshipPilot[] = await buildStarshipPilot(starshipFromApi);
  return knex(ManyToManyTable.StarshipPilot).del()
    .then(() => {
      return knex(ManyToManyTable.StarshipPilot).insert(starshipPilot);
    });
};


const buildStarshipPilot = async (starshipFromApi: IStarshipFromApi[]):Promise<StarshipPilot[]> =>
  await Promise.all(
    starshipFromApi.map(
      async (starship: IStarshipFromApi) => ({
        starship_id: await
          knex
            .select(StarshipEntityFields.Id)
            .from(EntityTable.Starship)
            .where(StarshipEntityFields.Url, starship.url)
            .then((obj: { id: string }[]) => flatten(obj).map(v => v.id)[0]),
        people: flatten(
          await Promise.all(
            starship.pilots.map(async (url: string) =>
              await knex
                .select(PeopleEntityFields.Id)
                .from(EntityTable.People)
                .where(PeopleEntityFields.Url, url)
                .then((obj) => obj.reduce((acc, curr) => [...acc, curr.id], []))
            )
          )
        )
      })
    )
  )
    .then((obj: Array<{ starship_id: string, people: string[] }>) =>
      flatten(
        obj.map(
          ({ starship_id, people }) => people.map((id: string) => ({
            id: uuid(),
            starship_id,
            people_id: id

          }))
        )
      )
    )

