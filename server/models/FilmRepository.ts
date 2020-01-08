import { FilmContext } from '../DB/FilmContext';

export default(() => {
  const { get } = FilmContext; 
  return {
    getById: get('id'),
    getByName: get('name'),
    getAll: get()
  }
})()


