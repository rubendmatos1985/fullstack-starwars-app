import { asyncMemoize as Mem } from "../utils/memoize"
import { getByIdQuery } from "../DB/getById"
import { EntityTable, ManyToManyTable } from "../types/Tables"
import { IStarshipResponse } from "../types/interfaces/Starship"
import { FilmFieldsNames } from "../types/interfaces/Film"
import { StarshipsInFilmsFields } from "../types/interfaces/StarshipsInFilms"
import { PeopleEntityFields } from "../types/interfaces/People"
import { getAll } from "../DB/getAll"
import { StarshipPilotFieldsNames } from "../types/interfaces/StarshipPilot"

export default(() => {
  const _getById = Mem(getByIdQuery<EntityTable.Starship, IStarshipResponse>(
    EntityTable.Starship,
    [
      {
        tableName: EntityTable.Film,
        showFields: [FilmFieldsNames.Id, FilmFieldsNames.Title],
        fieldNameInResponse: 'films',
        manyToManyTableName: ManyToManyTable.StarshipsInFilms,
        intersectEntityOn: StarshipsInFilmsFields.FilmId,
        where: StarshipsInFilmsFields.StarshipId
      },
      {
        tableName: EntityTable.People,
        showFields: [PeopleEntityFields.Id, PeopleEntityFields.Name],
        fieldNameInResponse: 'pilots',
        manyToManyTableName: ManyToManyTable.StarshipPilot,
        intersectEntityOn: StarshipPilotFieldsNames.PeopleId,
        where: StarshipPilotFieldsNames.StarshipId
      }

    ]
  ))

  return {
    getById: _getById,
    getAll: getAll(EntityTable.Starship, _getById)
  }
})()