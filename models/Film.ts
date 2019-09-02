import { asyncMemoize as Mem } from '../utils/memoize';
import Knex from 'knex';
import { ExecException } from 'child_process';
import { Table } from '../types/Tables';
import { IFilmResponse, IFilmEntity, IFilmClass, IFromForeignTables } from '../types/interfaces/Film';
import  { filter } from 'ramda';
const knex: Knex = require('knex')(require('../knexfile').development);

const Film:IFilmClass={
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
    const starships: ()=> Promise<IFromForeignTables[]> = ()=>
        knex
          .select('id', 'name')
          .from(Table.Starship)
          .whereIn('id', knex=>{
            knex
              .select('starship_id')
              .from(Table.StarshipsInFilms)
              .where('film_id', id)
          })      
    return Promise.all([film(), characters(), planets(), starships()])
      .then(([film, characters, planets, starships]) => ({
        ...film[0],
        characters,
        planets,
        starships
      }))
      .catch((e: ExecException) => { console.log(e); return { message: 'Not Found' }});
  }
  ),
  create: (object:IFilmResponse)=> knex.insert(object).into(Table.Film)
};
export default Film;
