import { IDBContext, knex, IDBResponse } from '.';
import { IStarshipViewModel } from '../models/ViewModels/StarshipViewModel';
import { ManyToManyTable, EntityTable } from '../types/Tables';
import { Status } from '../middlewares/helpers';
import {
  RelationData,
  insertItemsIfNotAlreadyStored,
  getIdsRelatedToThisEntity,
  validateCandidates
} from './commons';
import { Starship } from '../types/DB';
import uuid = require('uuid');

export const StarshipContext: IDBContext<IStarshipViewModel> = {
  Get: (field?: string) =>
    function(value?: string) {
      const k =
        field && value
          ? field === 'name'
            ? knex.where(field, 'like', `%${value}%`)
            : knex.where(field, value)
          : knex;
      return k
        .select(
          'starship.*',
          'pilots.json_agg as pilots',
          'films.json_agg as films'
        )
        .from(function() {
          this.select(
            'starship.id as starship_id',
            knex.raw(
              `json_agg(json_build_object('id', people.id, 'name', people.name))`
            )
          )
            .from(EntityTable.Starship)
            .leftJoin(
              ManyToManyTable.StarshipPilot,
              'starship_pilot.starship_id',
              'starship.id'
            )
            .leftJoin('people', 'people.id', 'starship_pilot.people_id')
            .groupBy('starship.id')
            .as('pilots');
        })
        .join(
          function() {
            this.select(
              'starship.id as starship_id',
              knex.raw(
                `json_agg(json_build_object('id', film.id, 'name', film.title))`
              )
            )
              .from(EntityTable.Starship)
              .leftJoin(
                'starships_in_films',
                'starships_in_films.starship_id',
                'starship.id'
              )
              .leftJoin('film', 'film.id', 'starships_in_films.film_id')
              .groupBy('starship.id')
              .as('films');
          },
          'pilots.starship_id',
          'films.starship_id'
        )
        .join(EntityTable.Starship, 'starship.id', 'pilots.starship_id')
        .then((v) => ({ status: Status.Successfull, message: v }))
        .catch((e) => ({ status: Status.Error, message: e }));
    },
  Add: (field: string) =>
    async function(
      starshipId: string,
      itemsIds: string[]
    ): Promise<IDBResponse<string>> {
      const relationContext:
        | RelationData
        | undefined = buildRelationContextFromField(field);
      if (!relationContext) {
        return {
          status: Status.Error,
          message: `planet relation do not have field ${field}`
        };
      }
      const storedIds = await getIdsRelatedToThisEntity(
        'starship_id',
        starshipId,
        relationContext
      );
      const enteredIdsAreValid = await validateCandidates(
        relationContext.entityTableName,
        itemsIds
      );
      if (!enteredIdsAreValid) {
        return Promise.resolve({
          status: Status.Error,
          message: 'Parameter itemIds has invalid values'
        });
      }
      return insertItemsIfNotAlreadyStored(
        starshipId,
        'starship_id',
        itemsIds,
        storedIds,
        relationContext
      );
    },
  Remove: (field: string) =>
    async function(ids: string[]): Promise<IDBResponse<string>> {
      const successMessage: IDBResponse<string> = {
        status: Status.Successfull,
        message: `item(s) with name ${field} 
          and id(s) equals to ${JSON.stringify(ids)} 
          deleted successfully`
      };
      const relation: RelationData | undefined = buildRelationContextFromField(
        field
      );
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
    knex('starship')
      .del()
      .where({ id })
      .then((v) => ({
        status: Status.Successfull,
        message: `item with id ${id} removed successfully`
      }))
      .catch((e) => ({
        status: Status.Error,
        message: `item with id ${id} not founded`
      })),
  Create: (planet: Starship) => {
    const starshipId = uuid();
    return knex('starship')
      .insert({ id: starshipId, ...planet })
      .returning('id')
      .then((v) => ({
        status: Status.Successfull,
        message: v
      }))
      .catch((e) => ({ status: Status.Error, message: e }));
  },
  Update: (starship: Starship) =>
    knex('starship')
      .where({ id: starship.id })
      .update(starship)
      .then((v) => ({
        status: Status.Successfull,
        message: `Item with id ${starship.id} updated successfully`
      }))
      .catch((e) => ({ status: Status.Error, message: e }))
};

function buildRelationContextFromField(fieldName: string): RelationData {
  switch (fieldName) {
    case 'pilots': {
      return {
        tableName: 'starship_pilot',
        columnName: 'people_id',
        entityTableName: 'people'
      };
    }
    case 'films': {
      return {
        tableName: 'starships_in_films',
        columnName: 'film_id',
        entityTableName: 'film'
      };
    }
    default:
      return undefined;
  }
}
