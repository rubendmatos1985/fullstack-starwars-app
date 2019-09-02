import * as Knex from 'knex';
import Api from '../api/';
import { IFilmFromApi } from '../types/interfaces/Film';
import { Table } from '../types/Tables';
import uuid from 'uuid/v1';
import { StarshipsInFilms } from '../types/interfaces/StarshipsInFilms';
export async function seed(knex: Knex): Promise<any> {
  const filmsAndStarships = await makeStarshipsInFilmsRelation(knex);
  return knex(Table.StarshipsInFilms)
    .del()
    .then(() => {
      return knex(Table.StarshipsInFilms).insert(buildStarshipsInFilmsEntity(filmsAndStarships));
    });
}

const makeStarshipsInFilmsRelation: (k: Knex) => any = async (knex: Knex) => {
  const films: IFilmFromApi[] = await Api.Film();
  const filmWithStarships: Promise<{ film: { id: string }[]; starships: { id: string }[] }>[] = films.map(
    async (film: IFilmFromApi) => ({
      film: await knex
        .select('id')
        .from(Table.Film)
        .where('url', film.url),

      starships: await knex
        .select('id')
        .from(Table.Starship)
        .whereIn('url', film.starships)
    })
  );
  return Promise.all(filmWithStarships);
};

const buildStarshipsInFilmsEntity: (
  filmsAndStarships: { film: { id: string }[]; starships: { id: string }[] }[]
) => Array<StarshipsInFilms> = (filmAndPlanets) =>
  filmAndPlanets
    .map((obj: { film: Array<{ id: string }>; starships: Array<{ id: string }> }) =>
      obj.starships.reduce(
        (acc: Array<StarshipsInFilms>, curr: { id: string }) => [
          ...acc,
          {
            id: uuid(),
            starship_id: curr.id,
            film_id: obj.film[0].id
          }
        ],
        []
      )
    )
    .reduce((acc: any, curr: any) => [...acc, ...curr]);
