import * as Knex from 'knex';
import mapData from '../utils/mapData';
import { IStarshipFromApi, IStarshipEntity, StarshipEntityFields as Fields } from '../types/interfaces/Starship';
import Api from '../api';
import { Table } from '../types/Tables';

export async function seed(knex: Knex): Promise<any> {
  const data: Promise<IStarshipEntity[]> = mapData<IStarshipFromApi, IStarshipEntity>(
    Api.Starship,
    Object.keys(Fields).map((k) => Fields[k as any])
  );
  return knex(Table.Starship)
    .del()
    .then(() => {
      return knex(Table.Starship).insert(data);
    });
}
