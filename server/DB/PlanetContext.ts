import { knex, IDBContext, IDBResponse } from '.';
import { IPlanetViewModel } from '../models/ViewModels/PlanetViewModel';
import {
  RelationData,
  getIdsRelatedToThisEntity,
  validateCandidates,
  insertItemsIfNotAlreadyStored
} from './commons';
import { Status } from '../middlewares/helpers';

export const PlanetContext: IDBContext<IPlanetViewModel> = {
  Get: (field?: string) =>
    function(value?: string): Promise<IPlanetViewModel[]> {
      const k =
        field && value
          ? field === 'name'
            ? knex.where(field, 'like', `%${value}%`)
            : knex.where(field, value)
          : knex;
      return k
        .select(
          'planet.*',
          'residents.json_agg as residents',
          'films.json_agg as films'
        )
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
              .leftJoin(
                'planets_in_films',
                'planets_in_films.planet_id',
                'planet.id'
              )
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
    async function(
      planetId: string,
      itemsIds: string[]
    ): Promise<IDBResponse<string>> {
      const relationContext:
        | RelationData
        | undefined = buildRelationContextFromApiField(field);
      if (!relationContext) {
        return {
          status: Status.Error,
          message: `planet relation do not have field ${field}`
        };
      }
      const storedIds = await getIdsRelatedToThisEntity(
        'planet_id',
        planetId,
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
        planetId,
        'planet_id',
        itemsIds,
        storedIds,
        relationContext
      );
    }
};

function buildRelationContextFromApiField(
  fieldName: string
): RelationData | undefined {
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
