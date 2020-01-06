import { EntityTable } from "../types/Tables";
import { knex, IDBResponse } from ".";
import { Func3 } from "../../server/types/genricTypes";
import { Status } from "../middlewares/helpers";


export const getByField: Func3<EntityTable, string, any, Promise<IDBResponse>> =
  (tableName: EntityTable) => (field: string) => async (value: any) =>{ 
    return await knex(tableName).where(field as any, value)
      .then((v:any[]) => ({status: Status.Successfull, message: v[0] }))
      .catch((e: Error)=>({ status: Status.Error, message: e }) )
}