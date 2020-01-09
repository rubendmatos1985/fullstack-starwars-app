import { IDBContext, knex, IDBResponse } from ".";
import { IFilmViewModel } from "../models/ViewModels/FilmViewModel";
import { Status } from "../middlewares/helpers";
import uuid = require("uuid");

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
                .select('film.id as film_id', knex.raw(`json_agg(
                   json_build_object('id', people.id, 'name', people.name)
                 )`))
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
                .select('film.id as film_id', knex.raw(`json_agg(
                  json_build_object('id', planet.id, 'name', planet.name)
                )`))
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
                .select('film.id as film_id', knex.raw(`json_agg(
                  json_build_object('id', starship.id, 'name', starship.name)
                  )`))
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
                .select('film.id as film_id', knex.raw(`json_agg(
                  json_build_object('id', vehicle.id, 'name', vehicle.name)
                )`))
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
                .select('film.id as film_id', knex.raw(`json_agg(
                  json_build_object('id', specie.id, 'name', specie.name))
                `))
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
          .then((rs: IFilmViewModel[]) => ({ status: Status.Successfull, message: rs }))
          .catch(e => ({ status: Status.Error, message: e }))
      },

    // DELETE WILL ALWAYS DELETE A RELATION
    // NOT AN ATHOMIC VALUE
    remove: (columnName: string) => (ids: string[]): Promise<IDBResponse<string>> => {
      const successMessage =
        ({
          status: Status.Successfull,
          message: `item(s) with name ${columnName} and id(s) equals to ${JSON.stringify(ids)} deleted successfully`
        })
      const relationName = mapKeyNameToTableRelation(columnName);
      if (relationName) {
        return knex(relationName.tableName)
          .del()
          .whereIn(relationName.columnName, ids)
          .then(v => successMessage)
          .catch(e => ({ status: Status.Error, message: e }))
      }
      return Promise.resolve({ status: Status.Error, message: "Wrong field name" })
    },

    // ADD WILL ADD A FOREIGN RELATION
    // NOT AN ATHOMIC VALUE
    add: (columnName: string) => (filmId: string, itemIds: string[]):Promise<IDBResponse<string>> => {
      const relation: MapKeyNameToTableRelationResult = mapKeyNameToTableRelation(columnName);
      if (relation) {
        return knex(relation.tableName)
          .insert(
            itemIds.map(itemId =>
              ({
                id: uuid(),
                film_id: filmId,
                [relation.columnName]: itemId
              }))
          )
          .then(v => ({ status: Status.Successfull, message: `table ${relation.tableName} updated successfully` }))
          .catch(e => ({ status: Status.Error, message: e }))
      }
      return Promise.resolve({ status: Status.Error, message: "film do not have this field" })
    }
  })



// HELPERS

// TAKE AN INPUT STRING AND MAPS IT 
// TO AN OBJECT WITH CORRESPONDANT 
// TABLE AND COLUMN NAME

interface MapKeyNameToTableRelationResult {
  tableName: string
  columnName: string
}
function mapKeyNameToTableRelation(name: string): MapKeyNameToTableRelationResult | undefined {
  switch (name) {
    case 'characters':
      return { tableName: 'actors', columnName: 'people_id' }
    case 'planets':
      return { tableName: 'planets_in_films', columnName: 'planet_id' }
    case 'starships':
      return { tableName: 'starships_in_films', columnName: 'starship_id' }
    case 'vehicles':
      return { tableName: 'vehicles_in_films', columnName: 'vehicle_id' }
    case 'species':
      return { tableName: 'species_in_films', columnName: 'specie_id' }
    default:
      return undefined
  }
}

