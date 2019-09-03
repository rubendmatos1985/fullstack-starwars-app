import * as Knex from 'knex';
import Api from '../api/';
import { IFilmFromApi } from '../types/interfaces/Film';
import { Table } from '../types/Tables';
import uuid from 'uuid/v1';
import { starships_in_filmsFields, starships_in_films } from '../types/DB';
export async function seed(knex: Knex): Promise<any> {
  const filmsAndStarships:{film: { id: string }[], starships: { id: string }[]}[] = await makeStarshipsInFilmsRelation(knex);
  return knex(Table.StarshipsInFilms)
    .del()
    .then(() => {
      return knex(Table.StarshipsInFilms).insert(buildStarshipsInFilmsEntity(filmsAndStarships));
    });
}

const makeStarshipsInFilmsRelation: (k: Knex) => Promise<any> = async (knex: Knex) => {
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
) => Array<starships_in_films> = (filmAndPlanets) =>
  filmAndPlanets
    .map((obj: { film: Array<{ id: string }>; starships: Array<{ id: string }> }) =>
      obj.starships.reduce(
        (acc: Array<starships_in_films>, curr: { id: string }) => [
          ...acc,
          {
            id: uuid(),
            starship_id: curr.id as starships_in_filmsFields.starship_id,
            film_id: obj.film[0].id as starships_in_filmsFields.film_id
          }
        ],
        []
      )
    )
    .reduce((acc: any, curr: any) => [...acc, ...curr]);
