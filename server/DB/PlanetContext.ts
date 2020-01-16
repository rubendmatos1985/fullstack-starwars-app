import { knex, IDBContext, IDBResponse } from '.';
import { IPlanetViewModel } from '../models/ViewModels/PlanetViewModel';
import {
  RelationData,
  getIdsRelatedToThisEntity,
  validateCandidates,
  insertItemsIfNotAlreadyStored
} from './commons';
import { Status } from '../middlewares/helpers';
import { Planet } from '../models/Planet';
import uuid = require('uuid');

export const PlanetContext: IDBContext<IPlanetViewModel> = {
  Get: (field?: string) =>
    function(value?: string) {
      const k =
        field && value
          ? field === 'name'
            ? knex.where(field, 'like', `%${value}%`)
            : knex.where(field, value)
          : knex;
      return k
        .select('planet.*', 'residents.json_agg as residents', 'films.json_agg as films')
        .from(function() {
          this.select(
            'planet.id as planet_id',
            knex.raw(`json_agg(json_build_object('id', people.id, 'name', people.name))`)
          )
            .from('planet')
            .leftJoin('resident', 'resident.planet_id', 'planet.id')
            .leftJoin('people', 'people.id', 'resident.people_id')
            .groupBy('planet.id')
            .as('residents');
        })
        .join(
          function() {
            this.select(
              'planet.id as planet_id',
              knex.raw(`json_agg(json_build_object('id', film.id, 'title', film.title))`)
            )
              .from('planet')
              .leftJoin('planets_in_films', 'planets_in_films.planet_id', 'planet.id')
              .leftJoin('film', 'planets_in_films.film_id', 'film.id')
              .groupBy('planet.id')
              .as('films');
          },
          'residents.planet_id',
          'films.planet_id'
        )
        .join('planet', 'planet.id', 'residents.planet_id');
    },
  Add: (field: string) =>
    async function(planetId: string, itemsIds: string[]): Promise<IDBResponse<string>> {
      const relationContext: RelationData | undefined = buildRelationContextFromField(field);
      if (!relationContext) {
        return {
          status: Status.Error,
          message: `planet relation do not have field ${field}`
        };
      }
      const storedIds = await getIdsRelatedToThisEntity('planet_id', planetId, relationContext);
      const enteredIdsAreValid = await validateCandidates(relationContext.entityTableName, itemsIds);
      if (!enteredIdsAreValid) {
        return Promise.resolve({
          status: Status.Error,
          message: 'Parameter itemIds has invalid values'
        });
      }
      return insertItemsIfNotAlreadyStored(planetId, 'planet_id', itemsIds, storedIds, relationContext);
    },
  Remove: (field: string) =>
    async function(ids: string[]): Promise<IDBResponse<string>> {
      const successMessage: IDBResponse<string> = {
        status: Status.Successfull,
        message: `item(s) with name ${field} 
          and id(s) equals to ${JSON.stringify(ids)} 
          deleted successfully`
      };
      const relation: RelationData | undefined = buildRelationContextFromField(field);
      if (relation) {
        return knex(relation.tableName)
          .whereIn(relation.columnName, ids)
          .del()
          .then((v) => successMessage)
          .catch((e) => ({ status: Status.Error, message: e }));
      }
      return Promise.resolve({
        status: Status.Error,
        message: 'people do not have this field'
      });
    },

  RemoveThis: (id: string) =>
    knex('planet')
      .del()
      .where({ id })
      .then((v) => ({ status: Status.Successfull, message: `item with id ${id} removed successfully` }))
      .catch((e) => ({ status: Status.Error, message: `item with id ${id} not founded` })),
  Create: (planet: Planet) => {
    const planetId = uuid();
    return knex('planet')
      .insert({ id: planetId, ...planet })
      .returning('*')
      .then((v) => ({ status: Status.Successfull, message: v }))
      .catch((e) => ({ status: Status.Error, message: e }));
  },

  Update: (planet: Planet) =>
    knex('planet')
      .where({ id: planet.id })
      .update(planet)
      .then((v) => ({
        status: Status.Successfull,
        message: `Item with id ${planet.id} updated successfully`
      }))
      .catch((e) => ({ status: Status.Error, message: e }))
};

function buildRelationContextFromField(fieldName: string): RelationData | undefined {
  switch (fieldName) {
    case 'residents': {
      return {
        tableName: 'resident',
        columnName: 'people_id',
        entityTableName: 'people'
      };
    }
    case 'films': {
      return {
        tableName: 'planets_in_films',
        columnName: 'film_id',
        entityTableName: 'film'
      };
    }
    default:
      return undefined;
  }
}
