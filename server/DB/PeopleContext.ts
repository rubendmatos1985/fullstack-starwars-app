import { knex, IDBContext, IDBResponse } from '.';
import { IPeopleViewModel } from '../models/ViewModels/PeopleViewModel';
import {
  RelationData,
  getIdsRelatedToThisEntity,
  validateCandidates,
  insertItemsIfNotAlreadyStored
} from './commons';
import { Status } from '../middlewares/helpers';
import { People } from '../types/DB';
import uuid = require('uuid');

export const PeopleContext: IDBContext<IPeopleViewModel> = {
  Get: (field) => (value) => {
    const k =
      value && field
        ? field === 'name'
          ? knex.where(field, 'like', `%${value}%`)
          : knex.where({ [field]: value })
        : knex;
    return k
      .select(
        'people.*',
        'films.json_agg as films',
        'vehicles.json_agg as vehicles',
        'starships.json_agg as starships',
        'species.json_agg as species'
      )
      .from(function() {
        this.select('people.id as people_id', knex.raw('json_agg(film.title)'))
          .from('people')
          .leftJoin('actors', 'actors.people_id', 'people.id')
          .leftJoin('film', 'film.id', 'actors.film_id')
          .groupBy('people.id')
          .as('films');
      })
      .join(
        function() {
          this.select(
            'people.id as people_id',
            knex.raw('json_agg(vehicle.name)')
          )
            .from('people')
            .leftJoin('pilot', 'pilot.people_id', 'people.id')
            .leftJoin('vehicle', 'pilot.vehicle_id', 'vehicle.id')
            .groupBy('people.id')
            .as('vehicles');
        },

        'films.people_id',
        'vehicles.people_id'
      )
      .join(
        function() {
          this.select(
            'people.id as people_id',
            knex.raw('json_agg(starship.name)')
          )
            .from('people')
            .leftJoin('starship_pilot', 'starship_pilot.people_id', 'people.id')
            .leftJoin('starship', 'starship_pilot.starship_id', 'starship.id')
            .groupBy('people.id')
            .as('starships');
        },
        'starships.people_id',
        'films.people_id'
      )
      .join(
        function() {
          this.select(
            'people.id as people_id',
            knex.raw('json_agg(specie.name)')
          )
            .from('people')
            .leftJoin('race', 'people.id', 'race.people_id')
            .leftJoin('specie', 'specie.id', 'race.specie_id')
            .groupBy('people.id')
            .as('species');
        },
        'species.people_id',
        'films.people_id'
      )
      .join('people', 'people.id', 'films.people_id');
  },
  // REMOVE JUST FOREGIN TABLES
  Remove: (columnName: string) =>
    async function(ids: string[]): Promise<IDBResponse<string>> {
      const successMessage:IDBResponse<string> = {
        status: Status.Successfull,
        message: `item(s) with name ${columnName} 
        and id(s) equals to ${JSON.stringify(ids)} 
        deleted successfully`
      };
      const relation: RelationData | undefined = buildRelationContextFromField(
        columnName
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
  // ADD FOREING TABLES
  Add: (columnName: string) =>
    async function(
      peopleId: string,
      itemsIds: string[]
    ): Promise<IDBResponse<string>> {
      const relation = buildRelationContextFromField(columnName);
      if (!relation) {
        return Promise.resolve({
          status: Status.Error,
          message: 'film do not have this field'
        });
      }
      const storedIds: string[] = await getIdsRelatedToThisEntity(
        'people_id',
        peopleId,
        relation
      );

      const enteredIdsAreValid: boolean = await validateCandidates(
        relation.entityTableName,
        itemsIds
      );
      if (!enteredIdsAreValid) {
        return Promise.resolve({
          status: Status.Error,
          message: 'Parameter itemIds has invalid values'
        });
      }
      return insertItemsIfNotAlreadyStored(
        peopleId,
        'people_id',
        itemsIds,
        storedIds,
        relation
      );
    },
  Update: (people: People) =>
    knex('people')
      .where({ id: people.id })
      .update(people)
      .then(v => ({ status: Status.Successfull, message: `Item with id ${people.id} updated successfully`  }))
      .catch(e => ({ status: Status.Error, message: e }))
};

function buildRelationContextFromField(name: string): RelationData | undefined {
  switch (name) {
    case 'films':
      return {
        tableName: 'actors',
        columnName: 'film_id',
        entityTableName: 'film'
      };
    case 'vehicles':
      return {
        tableName: 'pilot',
        columnName: 'vehicle_id',
        entityTableName: 'vehicle'
      };
    case 'starships':
      return {
        tableName: 'starship_pilot',
        columnName: 'starship_id',
        entityTableName: 'starship'
      };
    case 'species':
      return {
        tableName: 'race',
        columnName: 'specie_id',
        entityTableName: 'specie'
      };
    default:
      return undefined;
  }
}
