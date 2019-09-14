import { ManyToManyTable, EntityTable } from '../types/Tables';
import { knex } from './index';
import { IPostgresJsonBuildObject } from '../types/DB';
const Maybe = require('folktale/maybe');

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


export function getByIdQuery<T, B>(
  tableName: T,
  manyToManyFields?: IManyToManyFieldsBuilder[],
  oneToManyFields?: IOneToMany
) {
  const evaluate = (condition: (arg: any) => boolean, val: any) => condition(val) ? Maybe.Just(val) : Maybe.Nothing();

  return (id: string) => {
    const mmFields = Maybe.fromNullable(manyToManyFields)
      .map((v: any) => v.map(selectFromManyToMany))
      .map((v: any) => v.reduce((acc: string, curr: (id: string) => ISelectFromManyToMany) =>
        evaluate(a => a !== "", acc)
          .map((a: string) => `${a}, '${curr(id).fieldName}', ${curr(id).query}`)
          .getOrElse(`'${curr(id).fieldName}', ${curr(id).query}`)
        , ""))
      .getOrElse("");
    return knex
      .raw(
        `'${tableName}', ( SELECT to_json(row)
              FROM ( SELECT * FROM ${tableName} WHERE id = :id ) 
              row 
              ),
          ${mmFields}                                 
        `,
        { id }
      )
      .wrap('SELECT json_build_object(', ')')
      .then((res: IPostgresJsonBuildObject) => res.rows[0].json_build_object)
      .then((res: any) =>
        Object.keys(res)
          .reduce((acc: any, curr: string, index: number): B =>
            evaluate((i: number) => i === 0, index)
              .map(() => ({ ...res[curr] }))
              .getOrElse({
                ...acc, [curr]: res[curr]
              })
            , {})
      )
  }
}



export interface IManyToManyFieldsBuilder {
  tableName: EntityTable,
  showFields: string[],
  fieldNameInResponse: string,
  manyToManyTableName: ManyToManyTable,
  intersectEntityOn: string,
  where: string
}

export interface ISelectFromManyToMany {
  fieldName: string,
  query: string
}

export const selectFromManyToMany = (field: IManyToManyFieldsBuilder) => (where: string) => {
  const fields = concatFieldsWithTableName(field.tableName, field.showFields);
  return {
    fieldName: field.tableName,
    query: `
  ( SELECT json_agg(result) 
    FROM ( SELECT ${fields} FROM ${field.tableName} 
    INNER JOIN ${ field.manyToManyTableName} ON ( ${field.tableName}.id = ${field.manyToManyTableName}.${field.intersectEntityOn})
    WHERE ${field.manyToManyTableName}.${field.where} = '${where}') 
    result 
  )
`}
}
// helpers

const concatFieldsWithTableName = (tableName: EntityTable, array: Array<string>) =>
  array
    .reduce((acc, curr, index) =>
      index <= 0
        ? `${tableName}.${curr}`
        : acc + `, ${tableName}.${curr}`

      , "")
