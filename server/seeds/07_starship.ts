import * as Knex from 'knex';
import mapData from '../utils/mapData';
import { IStarshipFromApi, IStarshipEntity, StarshipEntityFields as Fields } from '../models/Starship';
import Api from '../original_starwars_api';
import { Table } from '../models/Tables';

export async function seed(knex: Knex): Promise<any> {
  const data: IStarshipEntity[] = await mapData<IStarshipFromApi, IStarshipEntity>(Api.Starship, [
    Fields.Name,
    Fields.Model,
    Fields.Manufacturer,
    Fields.CostInCredits,
    Fields.Length,
    Fields.MaxAtmospheringSpeed,
    Fields.Crew,
    Fields.Passengers,
    Fields.CargoCapacity,
    Fields.Consumables,
    Fields.HyperdriveRating,
    Fields.MGLT,
    Fields.StarshipClass,
    Fields.Url,
    Fields.Created,
    Fields.Edited
  ]);
  return knex(Table.Starship)
    .del()
    .then(() => {
      return knex(Table.Starship).insert(data);
    });
}
