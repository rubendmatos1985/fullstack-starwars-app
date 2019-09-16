import * as Knex from 'knex';
import { Table } from '../types/Tables';
import { SpeciesInFilms, SpeciesInFilmsFields } from '../types/DB';
import { IFilmFromApi } from '../types/interfaces/Film';
import Api from '../original_starwars_api';
import uuid from 'uuid/v1';
export async function seed(knex: Knex): Promise<any> {
  const data: Array<{ film: { id: string }[]; species: { id: string }[] }> = await makeSpeciesInFilmsRelation(knex);
  return knex<SpeciesInFilms>(Table.SpeciesInFilms)
    .del()
    .then(() => {
      return knex<SpeciesInFilms[]>(Table.SpeciesInFilms).insert(buildSpeciesInFilmsEntity(data));
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
) => Array<SpeciesInFilms> = (filmAndPlanets) =>
  filmAndPlanets
    .map((obj: { film: Array<{ id: string }>; species: Array<{ id: string }> }) =>
      obj.species.reduce(
        (acc: Array<SpeciesInFilms>, curr: { id: string }) => [
          ...acc,
          {
            id: uuid() as SpeciesInFilmsFields.id,
            specie_id: curr.id as SpeciesInFilmsFields.specie_id,
            film_id: obj.film[0].id as SpeciesInFilmsFields.film_id
          }
        ],
        []
      )
    )
    .reduce((acc: SpeciesInFilms[], curr: any) => [...acc, ...curr]);
