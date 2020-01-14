import k, { Config } from "knex";
import { Status } from "../middlewares/helpers";
import { config } from '../knexfile';
export interface IDBResponse<T> {
  status: Status;
  message: T | Error;
}
export const knex = k(config);

export interface IDBContext<T> {
  Get: (f?: string) => (value?: any) => Promise<IDBResponse<T[]>>;
  Create?: any;
  Update?: any;
  Remove?: any;
  RemoveThis?:any
  Add?: any;
}
