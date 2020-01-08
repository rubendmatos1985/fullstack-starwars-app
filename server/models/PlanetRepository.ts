import { PlanetContext } from "../DB/PlanetContext";

export default (function () {
  const {get} = PlanetContext 
  return {
    getById: get('id'),

    getByName: get('name'),

    getAll: get()
  }
})()

