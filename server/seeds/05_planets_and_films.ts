import * as Knex from 'knex';
import { IFilmFromApi } from '../types/interfaces/Film';
import Api from '../original_starwars_api';
import uuid from 'uuid/v1';
import { PlanetsInFilms } from '../types/DB';

export async function seed(knex: Knex): Promise<any> {
  const filmAndPlanets: Array<{ film: { id: string }[]; planets: { id: string }[] }> = 
    await getFilmsAndPlanetsFromApi(knex);
  return knex('planets_in_films')
    .del()
    .then((v: any) => {
      return knex('planets_in_films').insert(buildFilmAndPlanetsEntity(filmAndPlanets));
    });
}

const getFilmsAndPlanetsFromApi: (k: Knex) => Promise<{ film: any[]; planets: any[] }[]> = async (knex: Knex) => {
  const films: IFilmFromApi[] = await Api.Film();
  const filmWithPlanets: Promise<{ film: any[]; planets: any[] }>[] = films.map(async (film: IFilmFromApi) => ({
    film: await knex
      .select('id')
      .from('film')
      .where('url', film.url),

    planets: await knex
      .select('id')
      .from('planet')
      .whereIn('url', film.planets)
  }));
  return Promise.all(filmWithPlanets);
};

const buildFilmAndPlanetsEntity: (
  filmAndPlanets: Array<{ film: Array<{ id: string }>; planets: Array<{ id: string }> }>
) => Array<PlanetsInFilms> = (filmAndPlanets) =>
  filmAndPlanets
    .map((obj: { film: Array<{ id: string }>; planets: Array<{ id: string }> }) =>
      obj.planets.reduce(
        (acc: Array<PlanetsInFilms>, curr: { id: string }) => [
          ...acc,
          {
            id: uuid(),
            planet_id: curr.id,
            film_id: obj.film[0].id
          }
        ],
        []
      )
    )
    .reduce((acc: any, curr: any) => [...acc, ...curr]);
