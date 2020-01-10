import { knex, IDBResponse } from ".";
import { isEmpty, intersection } from "ramda";
import uuid = require("uuid");
import { Status } from "../middlewares/helpers";

export interface RelationData {
    tableName: string;
    columnName: string;
    entityTableName: string;
  }

// GET THE IDS OF THE ELEMENTS RELATED
// WITH THE MAIN ENTITY 
// IN THE MANY TO MANY TABLE
 export function getIdsRelatedToThisEntity(
    primaryEntityName: string,
    primaryEntityValue: string,
    relationData: RelationData,
  ): Promise<string[]> {
    return knex
      .select(relationData.columnName)
      .from(relationData.tableName)
      .where(primaryEntityName, primaryEntityValue)
      .then((v: any[]) => v.map((o) => o[relationData.columnName]));
  }

 export function validateCandidates(
    foreignEntityName: string,
    idsToInsert: string[]
  ): Promise<boolean> {
    return knex
      .select('id')
      .from(foreignEntityName)
      .whereIn('id', idsToInsert)
      .then((idsFromDb: string[]) => idsToInsert.length === idsFromDb.length)
      .catch((e) => false);
  }

 export function insertItemsIfNotAlreadyStored(
    mainEntityId: string,
    mainEntityName: string,
    candidateItemsIds: string[],
    alreadyStoredIds: string[],
    relationData: RelationData,
  ): Promise<IDBResponse<string>> {
    if (isEmpty(intersection(candidateItemsIds, alreadyStoredIds))) {
      return knex(relationData.tableName)
        .insert(
          candidateItemsIds.map((itemId) => ({
            id: uuid(),
            [mainEntityName]: mainEntityId,
            [relationData.columnName]: itemId
          }))
        )
        .then((v) => ({
          status: Status.Successfull,
          message: `table ${relationData.tableName} updated successfully`
        }))
        .catch((e) => ({ status: Status.Error, message: e }));
    } else {
      return Promise.resolve({
        status: Status.Error,
        message: `Element(s) with id(s) ${candidateItemsIds} already stored`
      });
    }
  }