"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const memoize_1 = require("../utils/memoize");
const getById_1 = require("../DB/getById");
const Tables_1 = require("../types/Tables");
const People_1 = require("../types/interfaces/People");
const Pilot_1 = require("../types/interfaces/Pilot");
const Film_1 = require("../types/interfaces/Film");
const VehiclesInFilms_1 = require("../types/interfaces/VehiclesInFilms");
const getAll_1 = require("../DB/getAll");
exports.default = (() => {
    const _getById = memoize_1.asyncMemoize(getById_1.getByIdQuery(Tables_1.EntityTable.Vehicle, [
        {
            tableName: Tables_1.EntityTable.People,
            showFields: [People_1.IPeopleEntityFields.Id, People_1.IPeopleEntityFields.Name],
            fieldNameInResponse: 'pilots',
            manyToManyTableName: Tables_1.ManyToManyTable.Pilot,
            intersectEntityOn: Pilot_1.PilotFieldNames.PeopleId,
            where: Pilot_1.PilotFieldNames.VehicleId
        },
        {
            tableName: Tables_1.EntityTable.Film,
            showFields: [Film_1.FilmFieldsNames.Id, Film_1.FilmFieldsNames.Title],
            fieldNameInResponse: 'films',
            manyToManyTableName: Tables_1.ManyToManyTable.VehiclesInFilms,
            intersectEntityOn: VehiclesInFilms_1.VehiclesInFilmsFieldsNames.FilmId,
            where: VehiclesInFilms_1.VehiclesInFilmsFieldsNames.VehicleId
        }
    ]));
    return {
        getById: _getById,
        getAll: getAll_1.getAll(Tables_1.EntityTable.Vehicle, _getById)
    };
})();
//# sourceMappingURL=vehicle.js.map