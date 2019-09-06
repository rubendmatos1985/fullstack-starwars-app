import { asyncMemoize as Mem } from '../utils/memoize';
import Knex from 'knex';
import { ExecException } from 'child_process';
import { Table } from '../types/Tables';
import { IFilmResponse, IFilmClass } from '../types/interfaces/Film';
import { IFromForeignTables } from '../types/interfaces/FromForeignTables';
import { FilmFields, Film as FilmEntity } from '../types/DB';
import sql from '../utils/sql';
const knex: Knex = require('knex')(require('../knexfile').development);

class Film implements IFilmClass {
  getById = Mem(getByIdQuery);
  getAll = async () => {
    const ids: { id: FilmFields.id }[] = await knex.select('id').from(Table.Film);
    return ids.map(({ id }) => this.getById(id)());
  };
  insert = async (films: any[]) => {
    const normalizedFilm: FilmEntity[] = films.map((film: IFilmResponse, index: number) =>
      Object.keys(film)
        .filter((k: string) => k !== 'characters' && k !== 'vehicles' && k !== 'starships' && k !== 'planets')
        .reduce(
          (acc: any, curr: any) => ({
            ...acc,
            [curr]: films[index][curr]
          }),
          {}
        )
    );
    return normalizedFilm; // to do insert table in DB
  };
}
export default Film;

// HELPERS

const getByIdQuery = (id: string) => knex.raw(
  sql`SELECT json_build_object(
        'film', ( SELECT to_json(row)
                  FROM ( SELECT * FROM film WHERE id = :id ) 
                  row 
                ),
        'characters', ( SELECT json_agg(characters_array) 
                        FROM ( SELECT people.id, people.name FROM people 
                        INNER JOIN actors ON ( people.id = actors.people_id )
                        WHERE actors.film_id = :id) 
                        characters_array 
                      ),
         'planets', ( SELECT json_agg(planets_array) 
                      FROM ( SELECT planet.id, planet.name FROM planet 
                      INNER JOIN planets_in_films ON ( planet.id = planets_in_films.planet_id )
                      WHERE planets_in_films.film_id = :id ) 
                      planets_array 
                    ),
          'starships', ( SELECT json_agg(starships_array)
                         FROM ( SELECT starship.id, starship.name FROM starship 
                         INNER JOIN starships_in_films ON ( starships_in_films.starship_id = starship.id )
                         WHERE starships_in_films.film_id = :id ) 
                         starships_array
                       ),
           'vehicles',  ( SELECT json_agg(vehicles_array)
                          FROM ( SELECT vehicle.id, vehicle.name FROM vehicle
                          INNER JOIN vehicles_in_films ON ( vehicles_in_films.vehicle_id = vehicle.id) 
                          WHERE vehicles_in_films.film_id = :id) vehicles_array

                        )                                  
  )`,
  { id }
)
.then(res => res.rows[0].json_build_object)
.then(({ film, characters, planets, starships, vehicles })=>({ ...film, characters, planets, starships, vehicles }) )