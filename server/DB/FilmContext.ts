import { IDBContext, knex } from ".";
import { IFilmViewModel } from "../models/Film";

export const FilmContext: IDBContext<IFilmViewModel> =
  ({
    get: (field?: string) =>
      function (value?: any) {
        const k = field && value
          ? field === 'name'
            ? knex.where(field, 'like', `%${value}%`)
            : knex.where(field, value)
          : knex
        return k
          .select(
            'film.*',
            'characters.json_agg as characters',
            'planets.json_agg as planets',
            'starships.json_agg as starships',
            'vehicles.json_agg as vehicles',
            'species.json_agg as species'
          )
          .from(
            function () {
              this
                .select('film.id as film_id', knex.raw('json_agg(people.name)'))
                .from('film')
                .leftJoin('actors', 'actors.film_id', 'film.id')
                .leftJoin('people', 'people.id', 'actors.people_id')
                .groupBy('film.id')
                .as('characters')

            }
          )
          .join(
            function () {
              this
                .select('film.id as film_id', knex.raw('json_agg(planet.name)'))
                .from('film')
                .leftJoin('planets_in_films', 'planets_in_films.film_id', 'film.id')
                .leftJoin('planet', 'planet.id', 'planets_in_films.planet_id')
                .groupBy('film.id')
                .as('planets')
            },
            'characters.film_id',
            'planets.film_id'
          )
          .join(
            function () {
              this
                .select('film.id as film_id', knex.raw('json_agg(starship.name)'))
                .from('film')
                .leftJoin('starships_in_films', 'starships_in_films.film_id', 'film.id')
                .leftJoin('starship', 'starship.id', 'starships_in_films.starship_id')
                .groupBy('film.id')
                .as('starships')
            },
            'characters.film_id',
            'starships.film_id'
          )
          .join(
            function () {
              this
                .select('film.id as film_id', knex.raw('json_agg(vehicle.name)'))
                .from('film')
                .leftJoin('vehicles_in_films', 'vehicles_in_films.film_id', 'film_id')
                .leftJoin('vehicle', 'vehicle.id', 'vehicles_in_films.vehicle_id')
                .groupBy('film.id')
                .as('vehicles')
            },
            'characters.film_id',
            'vehicles.film_id'
          )
          .join(
            function () {
              this
                .select('film.id as film_id', knex.raw('json_agg(specie.name)'))
                .from('film')
                .leftJoin('species_in_films', 'species_in_films.film_id', 'film.id')
                .leftJoin('specie', 'specie.id', 'species_in_films.specie_id')
                .groupBy('film.id')
                .as('species')

            },
            'characters.film_id',
            'species.film_id'
          )
          .join('film', 'film.id', 'characters.film_id')
      }
  })