import { asyncMemoize as Mem } from '../utils/memoize';
import Knex from 'knex';
const knex: Knex = require('knex')(require('../knexfile').development);

const Film = {
  getById: Mem((id: string) => {
    const film: () => Promise<any> = () =>
      knex
        .select('*')
        .from('film')
        .where('id', id);
    const characters: () => Promise<any> = () =>
      knex
        .select('id', 'name')
        .from('people')
        .whereIn('id', (knex) => {
          knex
            .select('people_id')
            .from('actors')
            .where('film_id', id);
        });
    const planets: () => Promise<any> = () =>
      knex
        .select('id', 'name')
        .from('planet')
        .whereIn('id', (knex) => {
          knex
            .select('planet_id')
            .from('planets_in_films')
            .where('film_id', id);
        });
       
    return Promise.all([film(), characters(), planets()])
      .then(([film, characters, planets]) => ({
        ...film[0],
        characters,
        planets
      }))
      .catch((e) => ({ message: 'Not Found' }));
  })
};
export default Film;
