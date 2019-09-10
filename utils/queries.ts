import { ManyToManyTable, EntityTable } from '../types/Tables';

export interface IManyToManyFieldsBuilder {
  tableName: EntityTable,
  showFields: string[],
  fieldNameInResponse: string,
  manyToManyTableName: ManyToManyTable,
  intersectEntityOn: string,
  where: string
}

export interface ISelectFromManyToMany{
  fieldName: string,
  query: string
}

export const selectFromManyToMany = ( field:IManyToManyFieldsBuilder ) => (where: string) =>{
  const fields =  concatFieldsWithTableName(field.tableName, field.showFields);
  return {
    fieldName: field.tableName, 
    query: `
  ( SELECT json_agg(result) 
    FROM ( SELECT ${fields} FROM ${field.tableName} 
    INNER JOIN ${ field.manyToManyTableName } ON ( ${field.tableName}.id = ${field.manyToManyTableName }.${field.intersectEntityOn})
    WHERE ${field.manyToManyTableName}.${field.where} = '${where}') 
    result 
  )
`}
    }
// helpers

const concatFieldsWithTableName = (tableName: EntityTable, array: Array<string>)=> 
  array
    .reduce((acc, curr, index)=> 
     index <= 0 
     ? `${tableName}.${curr}`
     : acc + `, ${tableName}.${curr}` 
     
     ,"")
