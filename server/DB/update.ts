import { knex } from ".";
import { EntityTable } from "../types/Tables";

export interface IUpdateParams{
    field: string
    value: any
    where: IWhere,
    returning: string[]
  } 
  
  export interface IWhere{
    [key: string]: any
  }
  
export function update<T = EntityTable>(params: IUpdateParams){
    return knex(EntityTable.User)
      .update(params.field, params.value, params.returning)
      .where(params.where)
  }