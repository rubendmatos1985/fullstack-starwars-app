import { ManyToManyTable, EntityTable, OneToManyTable } from '../types/Tables';
import { knex } from './index';
import { IPostgresJsonBuildObject } from '../types/DB';
import { compose } from 'ramda';
import { asyncCompose } from '../utils/asyncCompose';

export interface IMMFieldsData extends IFieldsData, IShowFields { };
export interface IMMFieldsDataWithFieldsTransformed extends IFieldsData, IShowFieldsTransformed { };

export interface IShowFields {
  showFields: string[]
}
export interface IShowFieldsTransformed {
  showFields: string
}

export interface IFieldsData {
  tableName: EntityTable,
  fieldNameInResponse: string,
  manyToManyTableName: ManyToManyTable | OneToManyTable,
  intersectEntityOn: string,
  where: string
}



export interface IFieldWithQuery {
  fieldName: string,
  query: string
}




interface IOneToMany {
  tableName: EntityTable,
  showFields: string[],
  fieldNameInResponse: string,
  where: string
}

export function getByIdQuery<T, B>(
  tableName: T,
  foreignFields?: IMMFieldsData[] | undefined,
  oneToManyFields?: IOneToMany[]
) {
  return async (id: string) =>
    await asyncCompose(
      mapDBResponse<B>(foreignFields),

      (res: IPostgresJsonBuildObject) => res.rows[0].json_build_object,

      fetchEntityWithManyToManyFields<T>(tableName, id),

      getMMFieldsQueryFrom

    )(Promise.resolve(foreignFields))

}




function mapDBResponse<T>(manyToManyFields: IMMFieldsData[] | undefined){
  return (result: any) =>
    Object.keys(result)
      .reduce((acc: any, curr: string, index: number): T =>
        index === 0
          ? { ...result[curr] }
          : {
            ...acc, [
              manyToManyFields !== undefined
                ? manyToManyFields[index - 1].fieldNameInResponse : curr
            ]: result[curr]
          }
        , {})
}


function fetchEntityWithManyToManyFields<T>(tableName: T, id: string) {
  return (getMMFieldById: (w:string)=>IFieldWithQuery) =>
    knex
      .raw(
        `'${tableName}', ( SELECT to_json(row)
       FROM ( SELECT * FROM ${tableName} WHERE id = :id ) 
       row 
       ),
   ${getMMFieldById(id)}                                 
 `,
        { id }
      )
      .wrap('SELECT json_build_object(', ')');
}


const manyToManyQuery: IMMQueryFunction = (fieldData) => (where) => ({
  fieldName: fieldData.tableName,
  query: `
  ( SELECT json_agg(result) 
    FROM ( SELECT ${fieldData.showFields} FROM ${fieldData.tableName} 
    INNER JOIN ${ fieldData.manyToManyTableName} ON ( ${fieldData.tableName}.id = ${fieldData.manyToManyTableName}.${fieldData.intersectEntityOn})
    WHERE ${fieldData.manyToManyTableName}.${fieldData.where} = '${where}') 
    result 
  )
`})
type IConcatFieldsFunction = (fields: IMMFieldsData) => IMMFieldsDataWithFieldsTransformed;
type IMMQueryFunction = (f: IMMFieldsDataWithFieldsTransformed) => (w: string) => IFieldWithQuery

const concatFieldsWithTableName: IConcatFieldsFunction = (field) => ({
  ...field,
  showFields: field.showFields
    .reduce((acc, curr, index) =>
      index <= 0
        ? `${field.tableName}.${curr}`
        : acc + `, ${field.tableName}.${curr}`

      , "")
})


export const buildMMFQuery: ((f: IMMFieldsData) => (w: string) => IFieldWithQuery) =
  compose<IMMFieldsData, IMMFieldsDataWithFieldsTransformed, (w: string) => IFieldWithQuery>(
    manyToManyQuery,
    concatFieldsWithTableName
  );

const getMMFieldsQueryFrom = (fields: IMMFieldsData[] | undefined) => (id: string) =>
  fields !== undefined
    ? fields
      .map(buildMMFQuery)
      .reduce((acc: string, curr: ((id: string) => IFieldWithQuery)) =>
        acc !== ""
          ? (`${acc}, '${curr(id).fieldName}', ${curr(id).query}`)
          : (`'${curr(id).fieldName}', ${curr(id).query}`)
        , "")
    : "";