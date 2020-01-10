import { FilmContext } from "../DB/FilmContext";

export default (() => {
  const { Get, Remove, Add, Update }  = FilmContext;
  return {
    GetById                           : Get("id"),
    GetByName                         : Get("name"),
    GetAll                            : Get(),
    RemoveCharacters                  : Remove("characters"),
    RemovePlanets                     : Remove("planets"),
    RemoveStarships                   : Remove("starships"),
    RemoveVehicles                    : Remove("vehicles"),
    RemoveSpecies                     : Remove("species"),
    AddCharacters                     : Add("characters"),
    AddPlanets                        : Add("planets"),
    AddStarships                      : Add("starships"),
    AddVehicles                       : Add("vehicles"),
    AddSpecies                        : Add("species"),
    Update, 
  };
})();












