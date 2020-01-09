import { FilmContext } from '../DB/FilmContext';

export default(() => {
  const { get, remove } = FilmContext; 
  return {
    getById: get('id'),
    
    getByName: get('name'),
    
    getAll: get(),

    removeCharacters: remove('characters'),

    removePlanets: remove('planets'),

    removeStarships: remove('starships'),

    removeVehicles: remove('vehicles'),

    removeSpecies: remove('species')
  }
})()


