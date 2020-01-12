import { SpecieContext } from "../DB/SpecieContext";
import { IDBResponse } from "../DB";
import { ISpecieViewModel } from "./ViewModels/SpecieViewModel";

export default (() => {
  const { Get, Remove, Add, Update }  = SpecieContext;
  return {
    GetById                   : Get("id") as (v: string) => Promise<IDBResponse<ISpecieViewModel[]>>,
    GetAll                    : Get() as () => Promise<IDBResponse<ISpecieViewModel[]>>,
    GetByName                 : Get("name") as (v:string) => Promise<IDBResponse<ISpecieViewModel[]>>,
    RemovePeople              : Remove('people') as (v:string) => Promise<IDBResponse<ISpecieViewModel[]>>,
    RemoveFilms               : Remove('films') as (v:string) => Promise<IDBResponse<ISpecieViewModel[]>>,
    AddPeople                 : Add('people') as (v:string) => Promise<IDBResponse<ISpecieViewModel[]>>,
    AddFilms                  : Add('films') as (v:string) => Promise<IDBResponse<ISpecieViewModel[]>>,
    Update
  };
})();
