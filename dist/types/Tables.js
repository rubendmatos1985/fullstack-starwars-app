"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Table;
(function (Table) {
    Table["Actors"] = "actors";
    Table["Film"] = "film";
    Table["People"] = "people";
    Table["Pilot"] = "pilot";
    Table["Planet"] = "planet";
    Table["PlanetsInFilms"] = "planets_in_films";
    Table["Specie"] = "specie";
    Table["Starship"] = "starship";
    Table["Vehicle"] = "vehicle";
    Table["VehiclesInFilms"] = "vehicles_in_films";
    Table["StarshipsInFilms"] = "starships_in_films";
    Table["SpeciesInFilms"] = "species_in_films";
    Table["Race"] = "race";
    Table["StarshipPilot"] = "starship_pilot";
})(Table = exports.Table || (exports.Table = {}));
var ManyToManyTable;
(function (ManyToManyTable) {
    ManyToManyTable["Actors"] = "actors";
    ManyToManyTable["VehiclesInFilms"] = "vehicles_in_films";
    ManyToManyTable["StarshipsInFilms"] = "starships_in_films";
    ManyToManyTable["SpeciesInFilms"] = "species_in_films";
    ManyToManyTable["PlanetsInFilms"] = "planets_in_films";
    ManyToManyTable["Resident"] = "resident";
    ManyToManyTable["Pilot"] = "pilot";
    ManyToManyTable["StarshipPilot"] = "starship_pilot";
})(ManyToManyTable = exports.ManyToManyTable || (exports.ManyToManyTable = {}));
var OneToManyTable;
(function (OneToManyTable) {
    OneToManyTable["Race"] = "race";
})(OneToManyTable = exports.OneToManyTable || (exports.OneToManyTable = {}));
var EntityTable;
(function (EntityTable) {
    EntityTable["Film"] = "film";
    EntityTable["People"] = "people";
    EntityTable["Planet"] = "planet";
    EntityTable["Specie"] = "specie";
    EntityTable["Starship"] = "starship";
    EntityTable["Vehicle"] = "vehicle";
    EntityTable["Test"] = "test";
})(EntityTable = exports.EntityTable || (exports.EntityTable = {}));
//# sourceMappingURL=Tables.js.map