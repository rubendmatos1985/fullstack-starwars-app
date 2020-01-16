import { IDBContext, knex, IDBResponse } from '.';
import { IVehicleViewModel } from '../models/ViewModels/VehicleViewModel';
import {
  RelationData,
  getIdsRelatedToThisEntity,
  validateCandidates,
  insertItemsIfNotAlreadyStored
} from './commons';
import { Status } from '../middlewares/helpers';
import { Vehicle } from '../models/Vehicle';
import uuid = require('uuid');

export const VehicleContext: IDBContext<IVehicleViewModel> = {
  Get: (field?: string) =>
    function(value?: string) {
      const k =
        field && value
          ? field === 'name'
            ? knex.where(field, 'like', `%${value}%`)
            : knex.where(field, value)
          : knex;
      return k
        .select('vehicle.*', 'pilots.json_agg as pilots', 'films.json_agg as films')
        .from(function() {
          this.select(
            'vehicle.id as vehicle_id',
            knex.raw(`json_agg(json_build_object('id', people.id, 'name', people.name))`)
          )
            .from('vehicle')
            .leftJoin('pilot', 'pilot.vehicle_id', 'vehicle.id')
            .leftJoin('people', 'people.id', 'pilot.people_id')
            .groupBy('vehicle.id')
            .as('pilots');
        })
        .join(
          function() {
            this.select(
              'vehicle.id as vehicle_id',
              knex.raw(`json_agg(json_build_object('id', film.id, 'name', film.title))`)
            )
              .from('vehicle')
              .leftJoin('vehicles_in_films', 'vehicles_in_films.vehicle_id', 'vehicle.id')
              .leftJoin('film', 'film.id', 'vehicles_in_films.film_id')
              .groupBy('vehicle.id')
              .as('films');
          },
          'pilots.vehicle_id',
          'films.vehicle_id'
        )
        .join('vehicle', 'vehicle.id', 'pilots.vehicle_id');
    },
  Add: (field: string) =>
    async function(vehicleId: string, itemsIds: string[]): Promise<IDBResponse<string>> {
      const relationContext: RelationData | undefined = buildRelationContextFromField(field);
      if (!relationContext) {
        return {
          status: Status.Error,
          message: `planet relation do not have field ${field}`
        };
      }
      const storedIds = await getIdsRelatedToThisEntity('vehicle_id', vehicleId, relationContext);
      const enteredIdsAreValid = await validateCandidates(relationContext.entityTableName, itemsIds);
      if (!enteredIdsAreValid) {
        return Promise.resolve({
          status: Status.Error,
          message: 'Parameter itemIds has invalid values'
        });
      }
      return insertItemsIfNotAlreadyStored(vehicleId, 'vehicle_id', itemsIds, storedIds, relationContext);
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
    knex('vehicle')
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
  Create: (vehicle: Vehicle) => {
    const vehicleId = uuid();
    return knex('planet')
      .insert({ id: vehicleId, ...vehicle })
      .returning('id')
      .then((v) => ({
        status: Status.Successfull,
        message: v
      }))
      .catch((e) => ({ status: Status.Error, message: e }));
  },
  Update: (vehicle: Vehicle) =>
    knex('vehicle')
      .where({ id: vehicle.id })
      .update(vehicle)
      .then((v) => ({
        status: Status.Successfull,
        message: `Item with id ${vehicle.id} updated successfully`
      }))
      .catch((e) => ({ status: Status.Error, message: e }))
};

function buildRelationContextFromField(fieldName: string): RelationData {
  switch (fieldName) {
    case 'pilots': {
      return {
        tableName: 'pilot',
        columnName: 'people_id',
        entityTableName: 'people'
      };
    }
    case 'films': {
      return {
        tableName: 'vehicles_in_films',
        columnName: 'film_id',
        entityTableName: 'film'
      };
    }
    default:
      return undefined;
  }
}
