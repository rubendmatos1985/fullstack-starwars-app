import Knex from 'knex';
import { Status } from '../middlewares/helpers';
export interface IDBResponse {
    status: Status,
    message: any
}
export const knex: Knex = require('knex')(require('../knexfile'));

export interface IDBContext<DBModel> {
    get: (f?: string) => (value?: any) => Promise<DBModel[]>
  }