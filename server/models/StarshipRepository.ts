import { StarshipContext } from "../DB/StarshipContext"

export default(() => {
  const { get } = StarshipContext
  return {
    getById: get('id'),
    getAll: get(),
    getByName: get('name')
  }
})()