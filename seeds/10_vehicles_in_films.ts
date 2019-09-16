import * as Knex from 'knex';
import { Table } from '../types/Tables';
import { IFilmFromApi } from '../types/interfaces/Film';
import Api from '../original_starwars_api';
import uuid from 'uuid/v1';
import { VehiclesInFilms } from '../types/interfaces/VehiclesInFilms';
export async function seed(knex: Knex): Promise<any> {
  const vehiclesInFilms: { film: { id: string }[]; vehicles: { id: string }[] }[] = await makeVehiclesInFilmsRelation(
    knex
  );
  return knex(Table.VehiclesInFilms)
    .del()
    .then(() => {
      return knex(Table.VehiclesInFilms).insert(buildVehiclesInFilmsEntity(vehiclesInFilms));
    });
}

const makeVehiclesInFilmsRelation: (k: Knex) => any = async (knex: Knex) => {
  const films: IFilmFromApi[] = await Api.Film();
  const vehiclesInFilms: Promise<{ film: { id: string }[]; vehicles: { id: string }[] }>[] = films.map(
    async (film: IFilmFromApi) => ({
      film: await knex
        .select('id')
        .from(Table.Film)
        .where('url', film.url),

      vehicles: await knex
        .select('id')
        .from(Table.Vehicle)
        .whereIn('url', film.vehicles)
    })
  );
  return Promise.all(vehiclesInFilms);
};

const buildVehiclesInFilmsEntity: (
  VehiclesAndFilms: { film: { id: string }[]; vehicles: { id: string }[] }[]
) => Array<VehiclesInFilms> = (vehiclesAndFilms) =>
  vehiclesAndFilms
    .map((obj: { film: Array<{ id: string }>; vehicles: Array<{ id: string }> }) =>
      obj.vehicles.reduce(
        (acc: Array<VehiclesInFilms>, curr: { id: string }) => [
          ...acc,
          {
            id: uuid(),
            vehicle_id: curr.id,
            film_id: obj.film[0].id
          }
        ],
        []
      )
    )
    .reduce((acc: VehiclesInFilms[], curr: VehiclesInFilms[]) => [...acc, ...curr]);
