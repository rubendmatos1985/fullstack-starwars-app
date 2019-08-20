import Knex from 'knex';
import getDataFromApi from '../utils/fetchData';
import formatData from '../utils/formatData';

exports.seed = async function(knex:Knex):Promise<any> {
  const promeses: Promise<any>[] = Array(7).fill(0)
    .map((_, i)=> getDataFromApi(`https://swapi.co/api/planets/?page=${i+1}`));
  const result = await Promise.all(promeses)
    .then(v => v.reduce((acc, obj)=> [...acc, obj.results],[]).reduce((acc:any,o:any)=>[...acc, ...o] ,[]))  
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
