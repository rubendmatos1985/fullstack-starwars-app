import { asyncMemoize as Mem } from "../utils/memoize"
import { getByIdQuery } from "../DB/getById"
import { IVehicleResponse } from "../types/interfaces/Vehicle"
import { EntityTable, ManyToManyTable } from "../types/Tables"
import { IPeopleEntityFields } from "../types/interfaces/People"
import { PilotFieldNames } from "../types/interfaces/Pilot"
import { FilmFieldsNames } from "../types/interfaces/Film"
import { VehiclesInFilmsFieldsNames } from "../types/interfaces/VehiclesInFilms"
import { getAll } from "../DB/getAll"

export default (() => {
  const _getById = Mem(getByIdQuery<EntityTable.Vehicle, IVehicleResponse>(
    EntityTable.Vehicle,
    [
      {
        tableName: EntityTable.People,
        showFields: [IPeopleEntityFields.Id, IPeopleEntityFields.Name],
        fieldNameInResponse: 'pilots',
        manyToManyTableName: ManyToManyTable.Pilot,
        intersectEntityOn: PilotFieldNames.PeopleId,
        where: PilotFieldNames.VehicleId
      },
      {
        tableName: EntityTable.Film,
        showFields: [FilmFieldsNames.Id, FilmFieldsNames.Title],
        fieldNameInResponse: 'films',
        manyToManyTableName: ManyToManyTable.VehiclesInFilms,
        intersectEntityOn: VehiclesInFilmsFieldsNames.FilmId,
        where: VehiclesInFilmsFieldsNames.VehicleId
      }

    ]
  ))

  return {
    getById: _getById,
    getAll: getAll(EntityTable.Vehicle, _getById)
  }
})()