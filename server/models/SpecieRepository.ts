import { getByIdQuery } from "../DB/getById";
import { asyncMemoize as Mem } from "../utils/memoize";
import { ISpecieViewModel } from "./ViewModels/SpecieViewModel";
import { EntityTable, ManyToManyTable, OneToManyTable } from "../types/Tables";
import { PeopleEntityFields } from "./People";
import { SpeciesInFilmsFieldsName } from '../types/interfaces/SpeciesInFilms';
import { RaceFields } from "../types/interfaces/Races";
import { FilmFieldsNames } from "./Film";
import { getAll } from "../DB/getAll";

export default (() => {
  const _getById = Mem(getByIdQuery<EntityTable.Specie, ISpecieViewModel>(
    EntityTable.Specie, [
    {
      tableName: EntityTable.Film,
      showFields: [FilmFieldsNames.Id, FilmFieldsNames.Title],
      fieldNameInResponse: 'films',
      manyToManyTableName: ManyToManyTable.SpeciesInFilms,
      intersectEntityOn: SpeciesInFilmsFieldsName.FilmId,
      where: SpeciesInFilmsFieldsName.SpecieId
    },
    {
      tableName: EntityTable.People,
      showFields: [PeopleEntityFields.Id, PeopleEntityFields.Name],
      fieldNameInResponse: 'people',
      manyToManyTableName: OneToManyTable.Race,
      intersectEntityOn: RaceFields.PeopleId,
      where: RaceFields.SpecieId
    }

  ]))
  return {
    getById: _getById,
    getAll: getAll(EntityTable.Specie, _getById)
  }
})()