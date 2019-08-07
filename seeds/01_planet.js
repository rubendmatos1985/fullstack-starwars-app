const uuid = require('uuid/v1')
const getDataFromApi = require('../utils/fetchData')
const formatData = require('../utils/formatData')
exports.seed = async function(knex) {
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
