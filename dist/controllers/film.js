"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const memoize_1 = require("../utils/memoize");
const Tables_1 = require("../types/Tables");
const getById_1 = require("../DB/getById");
const Vehicle_1 = require("../types/interfaces/Vehicle");
const VehiclesInFilms_1 = require("../types/interfaces/VehiclesInFilms");
const People_1 = require("../types/interfaces/People");
const Actors_1 = require("../types/interfaces/Actors");
const getAll_1 = require("../DB/getAll");
exports.default = (() => {
    const _getById = memoize_1.asyncMemoize(getById_1.getByIdQuery(Tables_1.EntityTable.Film, [
        {
            tableName: Tables_1.EntityTable.Vehicle,
            showFields: [Vehicle_1.VehicleFieldsNames.Id, Vehicle_1.VehicleFieldsNames.Name],
            fieldNameInResponse: 'vehicles',
            manyToManyTableName: Tables_1.ManyToManyTable.VehiclesInFilms,
            intersectEntityOn: VehiclesInFilms_1.VehiclesInFilmsFieldsNames.VehicleId,
            where: VehiclesInFilms_1.VehiclesInFilmsFieldsNames.VehicleId
        },
        {
            tableName: Tables_1.EntityTable.People,
            showFields: [People_1.IPeopleEntityFields.Id, People_1.IPeopleEntityFields.Name],
            fieldNameInResponse: 'actors',
            manyToManyTableName: Tables_1.ManyToManyTable.Actors,
            intersectEntityOn: Actors_1.IActorsFieldsNames.PeopleId,
            where: Actors_1.IActorsFieldsNames.FilmId
        },
        {
            tableName: Tables_1.EntityTable.Starship,
            showFields: ['id', 'name'],
            fieldNameInResponse: 'vehicles',
            manyToManyTableName: Tables_1.ManyToManyTable.StarshipsInFilms,
            intersectEntityOn: 'starship_id',
            where: 'film_id'
        },
        {
            tableName: Tables_1.EntityTable.Planet,
            showFields: ['id', 'name'],
            fieldNameInResponse: 'planets',
            manyToManyTableName: Tables_1.ManyToManyTable.PlanetsInFilms,
            intersectEntityOn: 'planet_id',
            where: 'film_id'
        }
    ]));
    return {
        getById: _getById,
        getAll: getAll_1.getAll(Tables_1.EntityTable.Film, _getById)
    };
})();
//# sourceMappingURL=film.js.map