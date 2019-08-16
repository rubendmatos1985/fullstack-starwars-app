import Knex from 'knex';
import getDataFromApi from '../src/utils/fetchData';
import formatData from '../src/utils/formatData';

exports.seed = async function(knex:Knex):Promise<any> {
  const d = await getDataFromApi('https://swapi.co/api/planets/')
  const data = formatData(d.results, [
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
