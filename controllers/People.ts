import { asyncMemoize as Mem } from "../utils/memoize"
import { getByIdQuery } from "../DB/getById"
import { EntityTable, ManyToManyTable, OneToManyTable } from "../types/Tables"
import { IFilmResponse, FilmFieldsNames } from "../types/interfaces/Film"
import { IActorsFieldsNames } from "../types/interfaces/Actors"
import { ISpecieEntityFields } from "../types/interfaces/Specie"
import { RaceFields } from "../types/interfaces/Races"
import { VehicleFieldsNames } from "../types/interfaces/Vehicle"
import { PilotFieldNames } from "../types/interfaces/Pilot"
import { StarshipEntityFields } from "../types/interfaces/Starship"
import { StarshipPilotFieldsNames } from "../types/interfaces/StarshipPilot"
import { knex } from "../DB"
import { IPeopleEntityFields } from "../types/interfaces/People"
import { asyncCompose } from "../utils/asyncCompose"

export default (() => {
  const getIds = (tableName: EntityTable): Promise<{ id: string }[]> => knex.select('id').from(tableName);
  
  const mapPromisesToResult = (promises: Promise<any[]>[]): Promise<any[]> => Promise.all(promises);
  
  const _getAll = (ids: { id: string }[]): Promise<any[]>[] => ids.map(o => _getById(o.id)())

  const _getById = Mem(getByIdQuery<EntityTable.People, IFilmResponse>(EntityTable.People,
    [
      {
        tableName: EntityTable.Film,
        showFields: [FilmFieldsNames.Id, FilmFieldsNames.Title],
        fieldNameInResponse: 'films',
        manyToManyTableName: ManyToManyTable.Actors,
        intersectEntityOn: IActorsFieldsNames.FilmId,
        where: IActorsFieldsNames.PeopleId
      },
      {
        tableName: EntityTable.Specie,
        showFields: [ISpecieEntityFields.Id, ISpecieEntityFields.Name],
        fieldNameInResponse: 'species',
        manyToManyTableName: OneToManyTable.Race,
        intersectEntityOn: RaceFields.SpecieId,
        where: RaceFields.PeopleId

      },
      {
        tableName: EntityTable.Vehicle,
        showFields: [VehicleFieldsNames.Id, VehicleFieldsNames.Name],
        fieldNameInResponse: 'vehicles',
        manyToManyTableName: ManyToManyTable.Pilot,
        intersectEntityOn: PilotFieldNames.VehicleId,
        where: PilotFieldNames.PeopleId
      },
      {
        tableName: EntityTable.Starship,
        showFields: [StarshipEntityFields.Id, StarshipEntityFields.Name],
        fieldNameInResponse: 'starships',
        manyToManyTableName: ManyToManyTable.StarshipPilot,
        intersectEntityOn: StarshipPilotFieldsNames.StarshipId,
        where: StarshipPilotFieldsNames.PeopleId
      }
    ]))

  return {
    getById: _getById,
    getAll: () => asyncCompose(
      mapPromisesToResult,
      _getAll,
      getIds
    )(Promise.resolve(EntityTable.People))
  }
})()