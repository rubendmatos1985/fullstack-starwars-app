import { PeopleContext } from "../DB/PeopleContext";

export default (function() {
  const { Get, AddItems, RemoveItems, Update }  = PeopleContext;

  return {
    GetByName                           : Get("name"),
    GetById                             : Get("id"),
    GetAll                              : Get(),
    AddFilms                            : AddItems('films'),
    AddVehicles                         : AddItems('vehicles'),
    AddStarships                        : AddItems('starships'),
    AddSpecies                          : AddItems('species'),
    RemoveFilms                         : RemoveItems('films'),
    RemoveVehicles                      : RemoveItems('vehicles'),
    RemoveStarships                     : RemoveItems('starships'),
    RemoveSpecies                       : RemoveItems('species'),
    Update
  };
})();


