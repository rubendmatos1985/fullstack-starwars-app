import { asyncMemoize as Mem } from "../utils/memoize"
import { getByIdQuery } from "../DB/getById"
import { EntityTable, ManyToManyTable } from "../types/Tables"
import { IStarshipViewModel } from "./ViewModels/StarshipViewModel"
import { FilmFieldsNames } from "./Film"
import { StarshipsInFilmsFields } from "../types/interfaces/StarshipsInFilms"
import { PeopleEntityFields } from "./People"
import { getAll } from "../DB/getAll"
import { StarshipPilotFieldsNames } from "../types/interfaces/StarshipPilot"

export default(() => {
  const _getById = Mem(getByIdQuery<EntityTable.Starship, IStarshipViewModel>(
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