import { PeopleContext } from "../DB/PeopleContext";

export default (function() {
  const { Get, Add, Remove, Update, RemoveThis, Create }  = PeopleContext;

  return {
    GetByName                           : Get("name"),
    GetById                             : Get("id"),
    GetAll                              : Get(),
    AddFilms                            : Add('films'),
    AddVehicles                         : Add('vehicles'),
    AddStarships                        : Add('starships'),
    AddSpecies                          : Add('species'),
    RemoveFilms                         : Remove('films'),
    RemoveVehicles                      : Remove('vehicles'),
    RemoveStarships                     : Remove('starships'),
    RemoveSpecies                       : Remove('species'),
    Update,
    RemoveThis,
    Create
  };
})();


