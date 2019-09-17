"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./index");
const ramda_1 = require("ramda");
const asyncCompose_1 = require("../utils/asyncCompose");
;
;
function getByIdQuery(tableName, foreignFields) {
    return async (id) => await asyncCompose_1.asyncCompose(mapDBResponse(foreignFields), (res) => res.rows[0].json_build_object, fetchEntityWithManyToManyFields(tableName, id), getMMFieldsQueryFrom)(Promise.resolve(foreignFields));
}
exports.getByIdQuery = getByIdQuery;
function mapDBResponse(manyToManyFields) {
    return (result) => Object.keys(result)
        .reduce((acc, curr, index) => index === 0
        ? Object.assign({}, result[curr]) : Object.assign({}, acc, { [manyToManyFields !== undefined
            ? manyToManyFields[index - 1].fieldNameInResponse : curr]: result[curr] }), {});
}
function fetchEntityWithManyToManyFields(tableName, id) {
    return (getMMFieldById) => index_1.knex
        .raw(`'${tableName}', ( SELECT to_json(row)
       FROM ( SELECT * FROM ${tableName} WHERE id = :id ) 
       row 
       ),
   ${getMMFieldById(id)}                                 
 `, { id })
        .wrap('SELECT json_build_object(', ')');
}
const manyToManyQuery = (fieldData) => (where) => ({
    fieldName: fieldData.tableName,
    query: `
  ( SELECT json_agg(result) 
    FROM ( SELECT ${fieldData.showFields} FROM ${fieldData.tableName} 
    INNER JOIN ${fieldData.manyToManyTableName} ON ( ${fieldData.tableName}.id = ${fieldData.manyToManyTableName}.${fieldData.intersectEntityOn})
    WHERE ${fieldData.manyToManyTableName}.${fieldData.where} = '${where}') 
    result 
  )
`
});
const concatFieldsWithTableName = (field) => (Object.assign({}, field, { showFields: field.showFields
        .reduce((acc, curr, index) => index <= 0
        ? `${field.tableName}.${curr}`
        : acc + `, ${field.tableName}.${curr}`, "") }));
exports.buildMMFQuery = ramda_1.compose(manyToManyQuery, concatFieldsWithTableName);
const getMMFieldsQueryFrom = (fields) => (id) => fields !== undefined
    ? fields
        .map(exports.buildMMFQuery)
        .reduce((acc, curr) => acc !== ""
        ? (`${acc}, '${curr(id).fieldName}', ${curr(id).query}`)
        : (`'${curr(id).fieldName}', ${curr(id).query}`), "")
    : "";
