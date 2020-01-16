import { IDBContext, knex, IDBResponse } from '.';
import { ISpecieViewModel } from '../models/ViewModels/SpecieViewModel';
import { Status } from '../middlewares/helpers';
import {
  RelationData,
  getIdsRelatedToThisEntity,
  validateCandidates,
  insertItemsIfNotAlreadyStored
} from './commons';
import { ISpecieEntity } from '../models/Specie';
import uuid = require('uuid');

export const SpecieContext: IDBContext<ISpecieViewModel> = {
  Get: (field: string) =>
    function(value: string) {
      const k =
        field && value
          ? field === 'name'
            ? knex.where(field, 'like', `%${value}%`)
            : knex.where(field, value)
          : knex;

      return k
        .select('specie.*', 'in_race_people.json_agg as people', 'films.json_agg as films')
        .from(function() {
          this.select(
            'specie.id as specie_id',
            knex.raw("json_agg(json_build_object('id', people.id, 'name', people.name))")
          )
            .from('specie')
            .leftJoin('race', 'race.specie_id', 'specie.id')
            .leftJoin('people', 'people.id', 'race.people_id')
            .groupBy('specie.id')
            .as('in_race_people');
        })
        .join(
          function() {
            this.select(
              'specie.id as specie_id',
              knex.raw("json_agg(json_build_object('id', film.id, 'name', film.title))")
            )
              .from('specie')
              .leftJoin('species_in_films', 'species_in_films.specie_id', 'specie.id')
              .leftJoin('film', 'film.id', 'species_in_films.film_id')
              .groupBy('specie.id')
              .as('films');
          },
          'films.specie_id',
          'in_race_people.specie_id'
        )
        .join('specie', 'specie.id', 'in_race_people.specie_id')
        .then((v) => ({ status: Status.Successfull, message: v }))
        .catch((e) => {
          return { status: Status.Error, message: e };
        });
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
    knex('specie')
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
  Create: (specie: ISpecieEntity) => {
    const specieId = uuid();
    return knex('specie')
      .insert({ id: specieId, ...specie })
      .returning('id')
      .then((v) => ({
        status: Status.Successfull,
        message: v
      }))
      .catch((e) => ({ status: Status.Error, message: e }));
  },

  Add: (field: string) =>
    async function(specieId: string, itemsIds: string[]): Promise<IDBResponse<string>> {
      const relationContext: RelationData | undefined = buildRelationContextFromField(field);
      if (!relationContext) {
        return {
          status: Status.Error,
          message: `planet relation do not have field ${field}`
        };
      }
      const storedIds = await getIdsRelatedToThisEntity('specie_id', specieId, relationContext);
      const enteredIdsAreValid = await validateCandidates(relationContext.entityTableName, itemsIds);
      if (!enteredIdsAreValid) {
        return Promise.resolve({
          status: Status.Error,
          message: 'Parameter itemIds has invalid values'
        });
      }
      return insertItemsIfNotAlreadyStored(specieId, 'specie_id', itemsIds, storedIds, relationContext);
    },
  Update: (specie: ISpecieEntity) =>
    knex('specie')
      .where({ id: specie.id })
      .update(specie)
      .then((v) => ({
        status: Status.Successfull,
        message: `Item with id ${specie.id} updated successfully`
      }))
      .catch((e) => ({ status: Status.Error, message: e }))
};
function buildRelationContextFromField(field: string): RelationData {
  switch (field) {
    case 'people': {
      return {
        tableName: 'race',
        columnName: 'people_id',
        entityTableName: 'people'
      };
    }
    case 'films': {
      return {
        tableName: 'species_in_films',
        columnName: 'film_id',
        entityTableName: 'film'
      };
    }
    default:
      return undefined;
  }
}
