import Knex from 'knex';
import formatData from '../utils/formatData';
import Api from '../api/';

export async function seed(knex:Knex):Promise<any> { 
  const data = await formatData(Api.Planet, [
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
  return knex('planet')
    .del()
    .then(function() {
      return knex('planet').insert(data)
    })
}
