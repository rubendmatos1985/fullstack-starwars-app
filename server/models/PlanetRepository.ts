import { PlanetContext } from "../DB/PlanetContext";

export default (function() {
  const { Get }   = PlanetContext;
  return {
    getById       : Get("id"),
    getByName     : Get("name"),
    getAll        : Get()
  };
})();


