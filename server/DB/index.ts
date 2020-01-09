import Knex from "knex";
import { Status } from "../middlewares/helpers";
export interface IDBResponse<T> {
  status: Status;
  message: T | Error;
}
export const knex: Knex = require("knex")(require("../knexfile"));

export interface IDBContext<T> {
  get: (f?: string) => (value?: any) => Promise<IDBResponse<T[]> | any[]>;
  create?: any;
  update?: any;
  remove?: any;
  add?: any;
}
