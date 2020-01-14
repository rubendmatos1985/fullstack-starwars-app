import Knex from "knex";
import { Status } from "../middlewares/helpers";
export interface IDBResponse<T> {
  status: Status;
  message: T | Error;
}
export const knex: Knex = require("knex")(require("../knexfile"));

export interface IDBContext<T> {
  Get: (f?: string) => (value?: any) => Promise<IDBResponse<T[]>>;
  Create?: any;
  Update?: any;
  Remove?: any;
  RemoveThis?:any
  Add?: any;
}
