import { EntityTable } from "../types/Tables";
import { knex } from ".";
import { Func3 } from "../../server/types/genricTypes";


export const getByField: Func3<EntityTable, string, any, Promise<any[] | []>> =
  (tableName: EntityTable) => (field: string) => async (value: any) => 
    await knex(tableName).where(field as any, value).then((v:any[]) => v[0])
