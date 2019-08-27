import Knex from 'knex';
import formatData from '../utils/formatData';
import Api from '../api/';
exports.seed = async function(knex:Knex):Promise<any> {
  const result = await Api.Planet();  
  const data = formatData(result, [
    'name',
    'rotation_period',
    'orbital_period',
    'diameter',
    'climate',
    'gravity',
    'terrain',
    'surface_water',
    'population'
  ])
  return knex('planet')
    .del()
    .then(function() {
      return knex('planet').insert(data)
    })
}
