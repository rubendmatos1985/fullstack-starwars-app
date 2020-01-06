import { knex } from ".";
import { EntityTable } from "../types/Tables";
import { UserFields, IUserEntity } from "../types/interfaces/User";
import { IEntity } from "../types/interfaces/Entity";

export interface IUpdateParams{
    tableName: EntityTable,
    field: UserFields
    value: any
    where: IWhere,
    returning: string[]
  } 
  
  export interface IWhere{
    [key: string]: any
  }
  
export function update<T = IEntity>(params: IUpdateParams){
    return knex<T>(params.tableName)
      .update(params.field, params.value, params.returning)
      .where(params.where)
  }