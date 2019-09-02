import Knex from 'knex';
import mapData from '../utils/mapData';
import Api from '../api/';
import { IPlanetFromApi, IPlanetEntity } from '../types/interfaces/Planet';
import { Table } from '../types/Tables';

export async function seed(knex:Knex):Promise<any> { 
  const data = await mapData<IPlanetFromApi, IPlanetEntity>(Api.Planet, [
    'name',
    'rotation_period',
    'orbital_period',
    'diameter',
    'climate',
    'gravity',
    'terrain',
    'surface_water',
    'population',
    'url'
  ]);
  return knex(Table.Planet)
    .del()
    .then(function() {
      return knex(Table.Planet).insert(data)
    })
}
