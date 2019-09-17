import { IPlanetResponse } from "../types/interfaces/Planet";
import { asyncMemoize as Mem} from '../utils/memoize';
import { getByIdQuery } from "../DB/getById";
import { EntityTable, Table, ManyToManyTable } from "../types/Tables";
import { knex } from "../DB";
import { asyncCompose } from "../utils/asyncCompose";
import { PlanetFields } from "../types/DB";
import { getAll } from "../DB/getAll";

export default (()=>{
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
  return{
    getById: _getById,
    getAll: getAll(EntityTable.Planet, _getById)
  }
})()

