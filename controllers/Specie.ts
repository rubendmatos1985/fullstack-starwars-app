import { getByIdQuery } from "../DB/getById";
import { asyncMemoize as Mem } from "../utils/memoize";
import { ISpecieResponse } from "../types/interfaces/Specie";
import { EntityTable, ManyToManyTable, OneToManyTable } from "../types/Tables";
import { IPeopleEntityFields } from "../types/interfaces/People";
import { SpeciesInFilmsFieldsName } from '../types/interfaces/SpeciesInFilms';
import { RaceFields } from "../types/interfaces/Races";
import { FilmFieldsNames } from "../types/interfaces/Film";
import { knex } from "../DB";
import { asyncCompose } from "../utils/asyncCompose";

export default (() => {
  const getIds = async (tName: EntityTable):Promise<{id: string}[]> => await knex.select('id').from(tName);

  const mapPromisesToResult = (promises: Promise<ISpecieResponse>[]): Promise<ISpecieResponse[]> =>
   Promise.all(promises);

  const _getById = Mem(getByIdQuery<EntityTable.Specie, ISpecieResponse>(
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
      showFields: [IPeopleEntityFields.Id, IPeopleEntityFields.Name],
      fieldNameInResponse: 'people',
      manyToManyTableName: OneToManyTable.Race,
      intersectEntityOn: RaceFields.PeopleId,
      where: RaceFields.SpecieId
    }

  ]))
  const _getAll = (ids: { id: string }[]):Promise<ISpecieResponse>[] => ids.map(o => _getById(o.id)())
  return {
    getById: _getById,
    getAll: () => asyncCompose(
      mapPromisesToResult,
      _getAll,
      getIds
    )(Promise.resolve(EntityTable.Specie))
  }
})()