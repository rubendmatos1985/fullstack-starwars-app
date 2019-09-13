import { asyncMemoize as Mem } from '../utils/memoize';
import { EntityTable, ManyToManyTable } from '../types/Tables';
import { knex } from '../DB';
import { selectFromManyToMany, ISelectFromManyToMany } from '../utils/queries';
import { IPostgresJsonBuildObject } from '../types/DB';
import { IFilmResponse } from '../types/interfaces/Film';

export default {
  getById: Mem(getByIdQuery<EntityTable.Film, IFilmResponse>(
    EntityTable.Film,
    [
      {
        tableName: EntityTable.Vehicle,
        showFields: ['id', 'name'],
        fieldNameInResponse: 'vehicles',
        manyToManyTableName: ManyToManyTable.VehiclesInFilms,
        intersectEntityOn: 'vehicle_id',
        where: 'film_id'

      },
      {
        tableName: EntityTable.People,
        showFields: ['id', 'name'],
        fieldNameInResponse: 'actors',
        manyToManyTableName: ManyToManyTable.Actors,
        intersectEntityOn: 'people_id',
        where: 'film_id'
      },
      {
        tableName: EntityTable.Starship,
        showFields: ['id', 'name'],
        fieldNameInResponse: 'vehicles',
        manyToManyTableName: ManyToManyTable.StarshipsInFilms,
        intersectEntityOn: 'starship_id',
        where: 'film_id'
      },
      {
        tableName: EntityTable.Planet,
        showFields: ['id', 'name'],
        fieldNameInResponse: 'planets',
        manyToManyTableName: ManyToManyTable.PlanetsInFilms,
        intersectEntityOn: 'planet_id',
        where: 'film_id'
      }
    ],
  ))
}

// HELPERS

export interface IManyToManyFieldsBuilder {
  tableName: EntityTable,
  showFields: string[],
  fieldNameInResponse: string,
  manyToManyTableName: ManyToManyTable,
  intersectEntityOn: string,
  where: string
}

interface IOneToMany {
  tableName: EntityTable,
  showFields: string[],
  fieldNameInResponse: string,
  where: string
}

function getByIdQuery<T, B>(
  tableName: T,
  manyToManyFields?: IManyToManyFieldsBuilder[],
  oneToManyFields?: IOneToMany
) {
  return (id: string) => {
    const mmFields = () => manyToManyFields
      ? manyToManyFields
        .map(selectFromManyToMany)
        .reduce((acc: string, curr: (id: string) => ISelectFromManyToMany) =>
          acc !== ""
            ? `${acc}, '${curr(id).fieldName}', ${curr(id).query}`
            : `'${curr(id).fieldName}', ${curr(id).query}`
          , "")
      : "";
    return knex
      .raw(
        `'${tableName}', ( SELECT to_json(row)
                  FROM ( SELECT * FROM ${tableName} WHERE id = :id ) 
                  row 
                ),
        ${mmFields()}                                 
      `,
        { id }
      )
      .wrap('SELECT json_build_object(', ')')
      .then((res: IPostgresJsonBuildObject) => res.rows[0].json_build_object)
      .then((res: any) =>
        Object.keys(res)
          .reduce((acc: any, curr: string, index: number): B =>
            index === 0
              ? ({
                ...res[curr]
              })
              : ({
                ...acc, [curr]: res[curr]
              })
            , {})
      )
  }
}
