import { EntityTable } from "../types/Tables";
import { knex } from ".";
import { asyncCompose } from "../utils/asyncCompose";
import { IPeopleViewModel } from "../models/ViewModels/PeopleViewModel";
import { Func1, Func2 } from "../types/genricTypes";

type GetByIdHandler = Func1<string, Func1<string, Promise<IPeopleViewModel>>>

const getIds = (tableName: EntityTable): Promise<{ id: string }[]> => knex.select('id').from(tableName);

/* const _getAll = (getByIdHandler: GetByIdHandler) =>
  (ids: { id: string }[]): Promise<any[]>[] => ids.map(o => getByIdHandler(o.id))
 */
const mapPromisesToResult = (promises: Promise<any[]>[]): Promise<any[]> => Promise.all(promises);


export const getAll = (table: EntityTable, configuredGetByIdHandler: GetByIdHandler) => () =>
  asyncCompose(
    /* mapPromisesToResult,
    _getAll(configuredGetByIdHandler),
    getIds */
  )(Promise.resolve(table))


