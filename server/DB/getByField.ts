import { EntityTable } from "../types/Tables";
import { knex } from ".";

export const getByField = (tableName: EntityTable) => async (field: string, value: any) =>
  await knex(tableName).where(field as any, value)

    
