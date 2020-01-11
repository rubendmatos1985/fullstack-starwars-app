import { FilmContext } from "../DB/FilmContext";

export default (() => {
  const { Get, RemoveItems, AddItems, Update }  = FilmContext;
  return {
    GetById                           : Get("id"),
    GetByName                         : Get("name"),
    GetAll                            : Get(),
    RemoveCharacters                  : RemoveItems("characters"),
    RemovePlanets                     : RemoveItems("planets"),
    RemoveStarships                   : RemoveItems("starships"),
    RemoveVehicles                    : RemoveItems("vehicles"),
    RemoveSpecies                     : RemoveItems("species"),
    AddCharacters                     : AddItems("characters"),
    AddPlanets                        : AddItems("planets"),
    AddStarships                      : AddItems("starships"),
    AddVehicles                       : AddItems("vehicles"),
    AddSpecies                        : AddItems("species"),
    Update, 
  };
})();












