import { EntityTable } from "../types/Tables";
import { knex } from ".";
import { asyncCompose } from "../utils/asyncCompose";

type GetByIdHandler = (a: any) => () => Promise<any>

const getIds = (tableName: EntityTable): Promise<{ id: string }[]> => knex.select('id').from(tableName);

const _getAll = (getByIdHandler: GetByIdHandler) =>
  (ids: { id: string }[]): Promise<any[]>[] => ids.map(o => getByIdHandler(o.id)())

const mapPromisesToResult = (promises: Promise<any[]>[]): Promise<any[]> => Promise.all(promises);


export const getAll = (table: EntityTable, configuredGetByIdHandler: GetByIdHandler) => () =>
  asyncCompose(
    mapPromisesToResult,
    _getAll(configuredGetByIdHandler),
    getIds
  )(Promise.resolve(table))


