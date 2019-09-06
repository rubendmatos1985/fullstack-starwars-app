import { asyncMemoize as Mem } from '../utils/memoize';
import Knex from 'knex';
import { Table, EntityTable, ManyToManyTable } from '../types/Tables';
import { IFilmResponse, IFilmClass } from '../types/interfaces/Film';
import { FilmFields, Film as FilmEntity } from '../types/DB';
import sql from '../utils/sql';
import { knex } from '../DB';
import { selectFromManyToMany } from '../utils/queries';

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
const actors = selectFromManyToMany(
  {
    name: EntityTable.People,
    fields: ['id', 'name']
  },
  {
    relationWithEntityOn: 'people_id',
    where: 'film_id',
    name: ManyToManyTable.Actors
  }
);
const planets = selectFromManyToMany(
  {
    name: EntityTable.Planet,
    fields: ['id', 'name']
  },
  {
    relationWithEntityOn: 'planet_id',
    where: 'film_id',
    name: ManyToManyTable.PlanetsInFilms
  }
);
const starships = selectFromManyToMany(
  {
    name: EntityTable.Starship,
    fields: ['id', 'name']
  },
  {
    relationWithEntityOn: 'starship_id',
    where: 'film_id',
    name: ManyToManyTable.StarshipsInFilms
  }
);
const vehicles = selectFromManyToMany({
  name: EntityTable.Starship,
  fields: ['id', 'name']
},
{
  relationWithEntityOn: 'vehicle_id',
  where: 'film_id',
  name: ManyToManyTable.VehiclesInFilms
}
);
const getByIdQuery = (id: string) => {
  return knex
    .raw(
      `SELECT json_build_object(
        'film', ( SELECT to_json(row)
                  FROM ( SELECT * FROM film WHERE id = :id ) 
                  row 
                ),
        'characters',${actors(id)},
        'planets',  ${planets(id)},
        'starships', ${starships(id)},
        'vehicles',  ${vehicles(id)}                                 
  )`,
      { id }
    )
    .then((res: any) => res.rows[0].json_build_object)
    .then(
      ({ film, characters, planets, starships, vehicles }: any) =>
        ({ ...film, characters, planets, starships, vehicles } as IFilmResponse)
    );
};
