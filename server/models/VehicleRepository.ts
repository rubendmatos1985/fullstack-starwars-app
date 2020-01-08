import { asyncMemoize as Mem } from "../utils/memoize"
import { getByIdQuery } from "../DB/getById"
import { IVehicleViewModel } from "./ViewModels/VehicleViewModel"
import { EntityTable, ManyToManyTable } from "../types/Tables"
import { PeopleEntityFields } from "./People"
import { PilotFieldNames } from "../types/interfaces/Pilot"
import { FilmFieldsNames } from "./Film"
import { VehiclesInFilmsFieldsNames } from "../types/interfaces/VehiclesInFilms"
import { getAll } from "../DB/getAll"

export default (() => {
  const _getById = Mem(getByIdQuery<EntityTable.Vehicle, IVehicleViewModel>(
    EntityTable.Vehicle,
    [
      {
        tableName: EntityTable.People,
        showFields: [PeopleEntityFields.Id, PeopleEntityFields.Name],
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