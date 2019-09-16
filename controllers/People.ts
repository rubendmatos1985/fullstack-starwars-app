import { asyncMemoize as Mem } from "../utils/memoize"
import { getByIdQuery } from "../DB/getById"
import { EntityTable, ManyToManyTable, OneToManyTable } from "../types/Tables"
import { IFilmResponse } from "../types/interfaces/Film"

 export default (() => {
  const _getById = Mem(getByIdQuery<EntityTable.People, IFilmResponse>(EntityTable.People,
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
        manyToManyTableName: OneToManyTable.Race,
        intersectEntityOn: 'specie_id',
        where: 'people_id'

      },
       {
        tableName: EntityTable.Vehicle,
        showFields: ['id', 'name'],
        fieldNameInResponse: 'vehicles',
        manyToManyTableName: ManyToManyTable.Pilot,
        intersectEntityOn: 'vehicle_id',
        where: 'people_id'
      },
      {
        tableName: EntityTable.Starship,
        showFields: ['id', 'name'],
        fieldNameInResponse: 'starships',
        manyToManyTableName: ManyToManyTable.StarshipPilot,
        intersectEntityOn: 'starship_id',
        where: 'people_id'
      } 
    ]))

  return {
    getById: _getById,
  }
})()