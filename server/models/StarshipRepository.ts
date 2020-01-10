import { StarshipContext } from "../DB/StarshipContext"

export default(() => {
  const { Get }   = StarshipContext
  return {
    getById       : Get('id'),
    getAll        : Get(),
    getByName     : Get('name')
  }
})()