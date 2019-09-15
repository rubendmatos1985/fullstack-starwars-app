import { memoize as Mem } from "../utils/memoize"
import { getByIdQuery } from "../DB/getById"
import { EntityTable, ManyToManyTable } from "../types/Tables"
import { IFilmResponse } from "../types/interfaces/Film"

/* export default (() => {
  const _getById = Mem((id: string) => getByIdQuery<EntityTable.People, IFilmResponse>(EntityTable.People,
    [
      {
        tableName: EntityTable.Film,
        showFields: ['id', 'title'],
        fieldNameInResponse: 'films',
        manyToManyTableName: ManyToManyTable.Actors,
        intersectEntityOn: 'film_id',
        where: 'people_id'
      },
      {
        tableName: EntityTable.Specie,
        showFields: ['id', 'name'],
        fieldNameInResponse: 'species',
        manyToManyTableName: ManyToManyTable.
      }
    ]))

  return {
    getById: _getById,
  }
})() */