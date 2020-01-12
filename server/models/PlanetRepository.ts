import { PlanetContext } from '../DB/PlanetContext';

export default (function() {
  const { Get, Add, Remove, Update }  = PlanetContext;
  return {
    getById                   : Get('id'),
    getByName                 : Get('name'),
    getAll                    : Get(),
    AddResidents              : Add('residents'),
    AddFilms                  : Add('films'),
    RemoveResidents           : Remove('residents'),
    RemoveFilms               : Remove('films'),
    Update
  };
})();
