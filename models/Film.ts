import { asyncMemoize as Mem } from '../utils/memoize';
import Knex from 'knex';
import { ExecException } from 'child_process';
import { Table } from '../types/Tables';
import { IFilmResponse, IFilmEntity, IFilmClass, IFromForeignTables } from '../types/interfaces/Film';
import { filter } from 'ramda';
const knex: Knex = require('knex')(require('../knexfile').development);

const Film: IFilmClass = {
  getById: Mem((id: string) => {
    const film: () => Promise<IFilmEntity[]> = () =>
      knex
        .select('*')
        .from(Table.Film)
        .where('id', id);
    const characters: () => Promise<IFromForeignTables[]> = () =>
      knex
        .select('id', 'name')
        .from('people')
        .whereIn('id', (knex) => {
          knex
            .select('people_id')
            .from('actors')
            .where('film_id', id);
        });
    const planets: () => Promise<IFromForeignTables[]> = () =>
      knex
        .select('id', 'name')
        .from('planet')
        .whereIn('id', (knex) => {
          knex
            .select('planet_id')
            .from('planets_in_films')
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
    return Promise.all([film(), characters(), planets(), starships(), vehicles()])
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
  })
};
export default Film;
