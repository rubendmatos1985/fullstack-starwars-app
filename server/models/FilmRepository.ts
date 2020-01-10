import { FilmContext } from "../DB/FilmContext";

export default (() => {
  const { Get, RemoveItem, AddItems, Update }  = FilmContext;
  return {
    GetById                           : Get("id"),
    GetByName                         : Get("name"),
    GetAll                            : Get(),
    RemoveCharacters                  : RemoveItem("characters"),
    RemovePlanets                     : RemoveItem("planets"),
    RemoveStarships                   : RemoveItem("starships"),
    RemoveVehicles                    : RemoveItem("vehicles"),
    RemoveSpecies                     : RemoveItem("species"),
    AddCharacters                     : AddItems("characters"),
    AddPlanets                        : AddItems("planets"),
    AddStarships                      : AddItems("starships"),
    AddVehicles                       : AddItems("vehicles"),
    AddSpecies                        : AddItems("species"),
    Update, 
  };
})();












