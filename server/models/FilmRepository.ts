import { FilmContext } from '../DB/FilmContext';

export default(() => {
  const { get } = FilmContext; 
  return {
    getById: get('id'),
    getAll: get()
  }
})()


