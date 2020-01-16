import * as Knex from 'knex';
import mapData from '../utils/mapData';
import Api from '../original_starwars_api';
import { IPeopleFromApi, IPeople } from '../models/People';
import { Table } from '../models/Tables';

export async function seed(knex: Knex): Promise<any> {
  const data: IPeople[] = await mapData<IPeopleFromApi, IPeople>(Api.People, [
    'name',
    'height',
    'mass',
    'hair_color',
    'skin_color',
    'eye_color',
    'birth_year',
    'gender',
    'created',
    'edited',
    'url'
  ]);
  return knex(Table.People)
    .del()
    .then(() => knex(Table.People).insert(data));
}
