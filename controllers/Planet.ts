import { IPlanet, IPlanetResponse } from "../types/interfaces/Planet";
import { asyncMemoize as Mem} from '../utils/memoize';
import { getByIdQuery } from "../DB/queries";
import { EntityTable, Table, ManyToManyTable } from "../types/Tables";

export default (()=>{
  /* const _getById = Mem(getByIdQuery<EntityTable.Planet, IPlanetResponse>(
    EntityTable.Planet,
    [
      {
        tableName: Table.People,
        showFields: ['id', 'name'],
        fieldNameInResponse: 'residents',
        manyToManyTableName: ManyToManyTable.
      }
    ]
  )) */
})()

