import { ManyToManyTable, EntityTable, Table } from '../types/Tables';

export const selectFromManyToMany = (
  entity:  {name: EntityTable, fields: Array<string>},
  manyToManyTable: { relationWithEntityOn: string, where: string, name: ManyToManyTable},
) => (where: string) =>{
  const fields =  concatFieldsWithTableName(entity.name, entity.fields);
  return `
  ( SELECT json_agg(result) 
    FROM ( SELECT ${fields} FROM ${entity.name} 
    INNER JOIN ${ manyToManyTable.name } ON ( ${entity.name}.id = ${manyToManyTable.name }.${manyToManyTable.relationWithEntityOn})
    WHERE ${manyToManyTable.name}.${manyToManyTable.where} = '${where}') 
    result 
  )
`}

// helpers

const concatFieldsWithTableName = (tableName: EntityTable, array: Array<string>)=> 
  array
    .reduce((acc, curr, index)=> 
     index <= 0 
     ? `${tableName}.${curr}`
     : acc + `, ${tableName}.${curr}` 
     
     ,"")
