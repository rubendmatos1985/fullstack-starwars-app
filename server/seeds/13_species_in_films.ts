import * as Knex from 'knex';
import { Table } from '../types/Tables';
import { ISpeciesInFilms, SpeciesInFilmsFieldsName } from '../models/SpeciesInFilms';
import { IFilmFromApi } from '../models/Film';
import Api from '../original_starwars_api';
import uuid from 'uuid/v1';
export async function seed(knex: Knex): Promise<any> {
  const data: Array<{ film: { id: string }[]; species: { id: string }[] }> = await makeSpeciesInFilmsRelation(
    knex
  );
  return knex<ISpeciesInFilms>(Table.SpeciesInFilms)
    .del()
    .then(() => {
      return knex<ISpeciesInFilms[]>(Table.SpeciesInFilms).insert(buildSpeciesInFilmsEntity(data));
    });
}

const makeSpeciesInFilmsRelation: (
  k: Knex
) => Promise<Array<{ film: { id: string }[]; species: { id: string }[] }>> = async (knex: Knex) => {
  const films: Array<IFilmFromApi> = await Api.Film();
  const filmsWithSpecies: Promise<{ film: { id: string }[]; species: { id: string }[] }>[] = films.map(
    async (film: IFilmFromApi) => ({
      film: await knex
        .select('id')
        .from(Table.Film)
        .where('url', film.url),

      species: await knex
        .select('id')
        .from(Table.Specie)
        .whereIn('url', film.species)
    })
  );
  return Promise.all(filmsWithSpecies);
};

const buildSpeciesInFilmsEntity: (
  filmsAndStarships: Array<{ film: { id: string }[]; species: { id: string }[] }>
) => Array<ISpeciesInFilms> = (filmAndPlanets) =>
  filmAndPlanets
    .map((obj: { film: Array<{ id: string }>; species: Array<{ id: string }> }) =>
      obj.species.reduce(
        (acc: Array<ISpeciesInFilms>, curr: { id: string }) => [
          ...acc,
          {
            id: uuid(),
            specie_id: curr.id,
            film_id: obj.film[0].id
          }
        ],
        []
      )
    )
    .reduce((acc: ISpeciesInFilms[], curr: any) => [...acc, ...curr]);
