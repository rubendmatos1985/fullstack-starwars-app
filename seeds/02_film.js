const getDataFromApi = require('../utils/fetchData');
const formatData = require('../utils/formatData');

exports.seed = async function(knex) {
  const data = await getDataFromApi('https://swapi.co/api/films/');
  const formattedData = formatData(
    data.results,
    ['title', 
     'episode_id', 
     'opening_crawl', 
     'director', 
     'producer', 
     'release_date', 
     'created', 
     'edited', 
     'url'
    ]
    );
  return knex('film').del()
    .then(function () {
      return knex('film').insert(formattedData);
    });
};
