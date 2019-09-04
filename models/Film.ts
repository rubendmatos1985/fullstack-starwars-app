import { asyncMemoize as Mem } from '../utils/memoize';
import Knex from 'knex';
import { ExecException } from 'child_process';
import { Table } from '../types/Tables';
import { IFilmResponse, IFilmEntity, IFilmClass } from '../types/interfaces/Film';
import { filter } from 'ramda';
import { IFromForeignTables } from '../types/interfaces/FromForeignTables';
import { FilmFields } from '../types/DB';
const knex: Knex = require('knex')(require('../knexfile').development);

class Film implements IFilmClass {
  getById = Mem((id: string) => {
    const film: () => Promise<IFilmEntity[]> = () =>
      knex
        .select('*')
        .from(Table.Film)
        .where('id', id);
    const characters: () => Promise<IFromForeignTables[]> = () =>
      knex
        .select('id', 'name')
        .from(Table.People)
        .whereIn('id', (knex) => {
          knex
            .select('people_id')
            .from(Table.Actors)
            .where('film_id', id);
        });
    const planets: () => Promise<IFromForeignTables[]> = () =>
      knex
        .select('id', 'name')
        .from(Table.Planet)
        .whereIn('id', (knex) => {
          knex
            .select('planet_id')
            .from(Table.PlanetsInFilms)
            .where('film_id', id);
        });
    const starships: () => Promise<IFromForeignTables[]> = () =>
      knex
        .select('id', 'name')
        .from(Table.Starship)
        .whereIn('id', (knex) => {
          knex
            .select('starship_id')
            .from(Table.StarshipsInFilms)
            .where('film_id', id);
        });
    const vehicles: () => Promise<IFromForeignTables[]> = () =>
      knex
        .select('id', 'name')
        .from(Table.Vehicle)
        .whereIn('id', (knex) => {
          knex
            .select('vehicle_id')
            .from(Table.VehiclesInFilms)
            .where('film_id', id);
        });
    const species: () => Promise<IFromForeignTables[]> = () =>
      knex
        .select('id', 'name')
        .from(Table.Specie)
        .whereIn('id', (knex) => {
          knex
            .select('specie_id')
            .from(Table.SpeciesInFilms)
            .where('film_id', id);
        });
    return Promise.all([film(), characters(), planets(), starships(), vehicles(), species()])
      .then(([film, characters, planets, starships, vehicles]) => ({
        ...film[0],
        characters,
        planets,
        starships,
        vehicles
      }))
      .catch((e: ExecException) => {
        console.log(e);
        return { message: 'Not Found' };
      });
  });
  getAll = async () => {
    const ids: { id: FilmFields.id }[] = await knex.select('id').from(Table.Film);
    return ids.map(({ id }) => this.getById(id)());
  };
  insert = async ()=>{

  }
}
export default Film;
