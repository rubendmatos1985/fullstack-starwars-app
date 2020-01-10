import { PeopleContext } from "../DB/PeopleContext";

export default (function() {
  const { Get, AddItems }   = PeopleContext;

  return {
    GetByName               : Get("name"),
    GetById                 : Get("id"),
    GetAll                  : Get(),
    AddFilms                : AddItems('films'),
    AddVehicles             : AddItems('vehicles'),
    AddStarships            : AddItems('starships'),
    AddSpecies              : AddItems('species'),
  };
})();


