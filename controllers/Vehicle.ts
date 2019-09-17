import { asyncMemoize as Mem } from "../utils/memoize"
import { getByIdQuery } from "../DB/getById"
import { IVehicleEntity, IVehicleResponse, VehicleFieldsNames } from "../types/interfaces/Vehicle"
import { EntityTable, ManyToManyTable } from "../types/Tables"
import { IPeopleEntityFields } from "../types/interfaces/People"
import { PilotFieldNames } from "../types/interfaces/Pilot"
import { FilmFieldsNames } from "../types/interfaces/Film"
import { VehiclesInFilmsFieldsNames } from "../types/interfaces/VehiclesInFilms"
import { knex } from "../DB"
import { asyncCompose } from "../utils/asyncCompose"

export default (() => {

  const getIds = (tableName: EntityTable): Promise<{ id: string }[]> => knex.select('id').from(tableName);

  const _getAll = (ids: { id: string }[]): Promise<IVehicleResponse>[] => ids.map(o => _getById(o.id)())

  const mapPromisesToResponse = (promises: Promise<IVehicleResponse>[]): Promise<IVehicleResponse[]> =>
    Promise.all(promises);

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
    getAll: ()=> asyncCompose(
      mapPromisesToResponse,
      _getAll,
      getIds
    )(Promise.resolve(EntityTable.Vehicle))
  }
})()