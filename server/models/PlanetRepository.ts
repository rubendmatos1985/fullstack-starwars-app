import { PlanetContext } from "../DB/PlanetContext";

export default (function() {
  const { Get, Add }  = PlanetContext;
  return {
    getById           : Get("id"),
    getByName         : Get("name"),
    getAll            : Get(),
    AddResidents      : Add('residents'),
    AddFilms         : Add('films')
  };
})();


