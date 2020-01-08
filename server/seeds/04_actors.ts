import * as Knex from 'knex';
import Api from '../original_starwars_api';
import { IFilmFromApi } from '../models/Film';
import uuid from 'uuid/v1';
import { Actors } from '../types/DB';
export async function seed(knex: Knex): Promise<any> {
  const actors = await buildAsyncActor(knex);

  return knex('actors')
    .del()
    .then(() => {
      return knex('actors').insert(buildActorsEntity(actors));
    });
}

const buildAsyncActor = async (knex: Knex) => {
  const films = await Api.Film();
  const actor: Promise<{ film: any[]; people: any[] }>[] = films.map(async (film: IFilmFromApi) => ({
    film: await knex
      .select('id')
      .from('film')
      .where('url', film.url),

    people: await knex
      .select('id')
      .from('people')
      .whereIn('url', film.characters)
  }));
  return Promise.all(actor);
};
const buildActorsEntity: (
  a: Array<{ film: Array<{ id: string }>; people: Array<{ id: string }> }>
) => Array<Actors> = (actors) =>
  actors
    .map((obj: { film: { id: string }[]; people: { id: string }[] }) =>
      obj.people.reduce(
        (acc: Array<{ id: string; people_id: string; film_id: string }>, curr: { id: string }) => [
          ...acc,
          {
            id: uuid(),
            people_id: curr.id,
            film_id: obj.film[0].id
          }
        ],
        []
      )
    )
    .reduce((acc, curr) => [...acc, ...curr]);
