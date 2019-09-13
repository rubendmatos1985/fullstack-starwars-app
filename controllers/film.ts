import { asyncMemoize as Mem } from '../utils/memoize';
import { EntityTable, ManyToManyTable, Table } from '../types/Tables';
import { IFilmResponse } from '../types/interfaces/Film';
import { getByIdQuery } from '../DB/queries';
import { knex } from '../DB';

const r = (()=>{
  const _getById = Mem(getByIdQuery<EntityTable.Film, IFilmResponse>(
    EntityTable.Film,
    [
      {
        tableName: EntityTable.Vehicle,
        showFields: ['id', 'name'],
        fieldNameInResponse: 'vehicles',
        manyToManyTableName: ManyToManyTable.VehiclesInFilms,
        intersectEntityOn: 'vehicle_id',
        where: 'film_id'

      },
      {
        tableName: EntityTable.People,
        showFields: ['id', 'name'],
        fieldNameInResponse: 'actors',
        manyToManyTableName: ManyToManyTable.Actors,
        intersectEntityOn: 'people_id',
        where: 'film_id'
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


export default r;