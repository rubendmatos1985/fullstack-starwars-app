import { IPlanetResponse } from "../types/interfaces/Planet";
import { asyncMemoize as Mem} from '../utils/memoize';
import { getByIdQuery } from "../DB/queries";
import { EntityTable, Table, ManyToManyTable } from "../types/Tables";
import { knex } from "../DB";
import { asyncCompose } from "../utils/asyncCompose";

export default (()=>{
  const getIds = (tableName:Table) => knex.select('id').from(tableName);
  const _getById = Mem(getByIdQuery<EntityTable.Planet, IPlanetResponse>(
    
    EntityTable.Planet,
    [
      {
        tableName: EntityTable.People,
        showFields: ['id', 'name'],
        fieldNameInResponse: 'residents',
        manyToManyTableName: ManyToManyTable.Resident,
        intersectEntityOn: 'people_id',
        where: 'planet_id'
      },
      {
        tableName: EntityTable.Film,
        showFields: ['id', 'title'],
        fieldNameInResponse: 'films',
        manyToManyTableName: ManyToManyTable.PlanetsInFilms,
        intersectEntityOn: 'film_id',
        where: 'planet_id'
      }
    ]
  ))
  const _getAll = (tables:{id: string}[])=> tables.map((t:{id:string})=> _getById(t.id)())
  return{
    getById: _getById,
    getAll: async ()=> await asyncCompose(
      (ps:Promise<IPlanetResponse>[])=> Promise.all(ps), 
      _getAll, 
      getIds
      )(Promise.resolve(EntityTable.Planet))
  }
})()

