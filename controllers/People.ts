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
import { getAll } from "../DB/getAll"

export const People = (() => {
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
    getAll: getAll(EntityTable.People, _getById)
  }
})()