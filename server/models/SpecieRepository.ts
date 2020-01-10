import { SpecieContext } from "../DB/SpecieContext";
import { IDBResponse } from "../DB";
import { ISpecieViewModel } from "./ViewModels/SpecieViewModel";

export default (() => {
  const { Get }   = SpecieContext;
  return {
    getById       : Get("id") as (v: string) => Promise<IDBResponse<ISpecieViewModel[]>>,
    getAll        : Get() as () => Promise<IDBResponse<ISpecieViewModel[]>>,
    getByName     : Get("name") as (v:string) => Promise<IDBResponse<ISpecieViewModel[]>>
  };
})();
