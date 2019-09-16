import { asyncMemoize as Mem } from '../utils/memoize';
import { EntityTable, ManyToManyTable, Table } from '../types/Tables';
import { IFilmResponse } from '../types/interfaces/Film';
import { getByIdQuery } from '../DB/getById';
import { knex } from '../DB';
import { VehicleFieldsNames } from '../types/interfaces/Vehicle';
import { VehiclesInFilmsFieldsNames } from '../types/interfaces/VehiclesInFilms';
import { IPeopleEntityFields } from '../types/interfaces/People';
import  { IActors, IActorsFieldsNames } from '../types/interfaces/Actors';
export default (()=>{
  const _getById = Mem(getByIdQuery<EntityTable.Film, IFilmResponse>(
    EntityTable.Film,
    [
      {
        tableName: EntityTable.Vehicle,
        showFields: [VehicleFieldsNames.Id, VehicleFieldsNames.Name],
        fieldNameInResponse: 'vehicles',
        manyToManyTableName: ManyToManyTable.VehiclesInFilms,
        intersectEntityOn: VehiclesInFilmsFieldsNames.VehicleId,
        where: VehiclesInFilmsFieldsNames.VehicleId

      },
      {
        tableName: EntityTable.People,
        showFields: [IPeopleEntityFields.Id, IPeopleEntityFields.Name],
        fieldNameInResponse: 'actors',
        manyToManyTableName: ManyToManyTable.Actors,
        intersectEntityOn: IActorsFieldsNames.PeopleId,
        where: IActorsFieldsNames.FilmId
      },
      {
        tableName: EntityTable.Starship,
        showFields: ['id', 'name'],
        fieldNameInResponse: 'vehicles',
        manyToManyTableName: ManyToManyTable.StarshipsInFilms,
        intersectEntityOn: 'starship_id',
        where: 'film_id'
      },
      {
        tableName: EntityTable.Planet,
        showFields: ['id', 'name'],
        fieldNameInResponse: 'planets',
        manyToManyTableName: ManyToManyTable.PlanetsInFilms,
        intersectEntityOn: 'planet_id',
        where: 'film_id'
      }
    ],
  ))
  return{
   getById: _getById,
   getAll: async ()=>{
    const films:{id:string}[] = await knex.select('id').from(Table.Film);
    return Promise.all(
      films.map((f:{id: string}) => _getById(f.id)())
    )
   }
   
 
}})()


