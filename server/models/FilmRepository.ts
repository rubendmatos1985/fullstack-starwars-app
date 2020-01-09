import { FilmContext } from '../DB/FilmContext';

export default (() => {
  const { get, remove, add } = FilmContext;
  return {
    getById: get('id'),

    getByName: get('name'),

    getAll: get(),

    removeCharacters: remove('characters'),

    removePlanets: remove('planets'),

    removeStarships: remove('starships'),

    removeVehicles: remove('vehicles'),

    removeSpecies: remove('species'),

    addCharacters: add('characters'),

    addPlanets: add('planets'),
    
    addStarships: add('starships'),
    
    addVehicles: add('vehicles'),
    
    addSpecies: add('species'),





  }
})()


