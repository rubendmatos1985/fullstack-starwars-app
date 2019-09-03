import * as Knex from "knex";
import { Table } from "../types/Tables";
import { Specie } from "../types/DB";

export async function seed(knex: Knex): Promise<any> {
    
    return knex<Specie>(Table.SpeciesInFilms).del()
        .then(() => {
            return knex(Table.Specie).insert([]);
        });
};


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