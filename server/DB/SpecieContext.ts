import { IDBContext, knex } from ".";
import { ISpecieViewModel } from "../models/ViewModels/SpecieViewModel";

export const SpecieContext: IDBContext<ISpecieViewModel> =
  ({
    get: (field: string) =>
      function (value: string) {
        return knex.select('*')
      }
  })