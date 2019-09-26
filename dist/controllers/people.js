"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const memoize_1 = require("../utils/memoize");
const getById_1 = require("../DB/getById");
const Tables_1 = require("../types/Tables");
const Film_1 = require("../types/interfaces/Film");
const Actors_1 = require("../types/interfaces/Actors");
const Specie_1 = require("../types/interfaces/Specie");
const Races_1 = require("../types/interfaces/Races");
const Vehicle_1 = require("../types/interfaces/Vehicle");
const Pilot_1 = require("../types/interfaces/Pilot");
const Starship_1 = require("../types/interfaces/Starship");
const StarshipPilot_1 = require("../types/interfaces/StarshipPilot");
const getAll_1 = require("../DB/getAll");
exports.default = (() => {
    const _getById = memoize_1.asyncMemoize(getById_1.getByIdQuery(Tables_1.EntityTable.People, [
        {
            tableName: Tables_1.EntityTable.Film,
            showFields: [Film_1.FilmFieldsNames.Id, Film_1.FilmFieldsNames.Title],
            fieldNameInResponse: 'films',
            manyToManyTableName: Tables_1.ManyToManyTable.Actors,
            intersectEntityOn: Actors_1.IActorsFieldsNames.FilmId,
            where: Actors_1.IActorsFieldsNames.PeopleId
        },
        {
            tableName: Tables_1.EntityTable.Specie,
            showFields: [Specie_1.ISpecieEntityFields.Id, Specie_1.ISpecieEntityFields.Name],
            fieldNameInResponse: 'species',
            manyToManyTableName: Tables_1.OneToManyTable.Race,
            intersectEntityOn: Races_1.RaceFields.SpecieId,
            where: Races_1.RaceFields.PeopleId
        },
        {
            tableName: Tables_1.EntityTable.Vehicle,
            showFields: [Vehicle_1.VehicleFieldsNames.Id, Vehicle_1.VehicleFieldsNames.Name],
            fieldNameInResponse: 'vehicles',
            manyToManyTableName: Tables_1.ManyToManyTable.Pilot,
            intersectEntityOn: Pilot_1.PilotFieldNames.VehicleId,
            where: Pilot_1.PilotFieldNames.PeopleId
        },
        {
            tableName: Tables_1.EntityTable.Starship,
            showFields: [Starship_1.StarshipEntityFields.Id, Starship_1.StarshipEntityFields.Name],
            fieldNameInResponse: 'starships',
            manyToManyTableName: Tables_1.ManyToManyTable.StarshipPilot,
            intersectEntityOn: StarshipPilot_1.StarshipPilotFieldsNames.StarshipId,
            where: StarshipPilot_1.StarshipPilotFieldsNames.PeopleId
        }
    ]));
    return {
        getById: _getById,
        getAll: getAll_1.getAll(Tables_1.EntityTable.People, _getById)
    };
})();
//# sourceMappingURL=people.js.map