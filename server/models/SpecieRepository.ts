
import { SpecieContext } from "../DB/SpecieContext";
import { IDBResponse } from "../DB";
import { ISpecieViewModel } from "./ViewModels/SpecieViewModel";

export default (() => {
  const { get } = SpecieContext;
  return {
    getById: get('id') as (v:string)=> Promise<IDBResponse<ISpecieViewModel[]>>,
    getAll: get() as ()=> Promise<IDBResponse<ISpecieViewModel[]>>,
    getByName: get('name') as (v:string)=> Promise<IDBResponse<ISpecieViewModel[]>>
  }
})()