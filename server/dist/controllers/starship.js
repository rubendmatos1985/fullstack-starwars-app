"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const memoize_1 = require("../utils/memoize");
const getById_1 = require("../DB/getById");
const Tables_1 = require("../types/Tables");
const Film_1 = require("../types/interfaces/Film");
const StarshipsInFilms_1 = require("../types/interfaces/StarshipsInFilms");
const People_1 = require("../types/interfaces/People");
const getAll_1 = require("../DB/getAll");
const StarshipPilot_1 = require("../types/interfaces/StarshipPilot");
exports.default = (() => {
    const _getById = memoize_1.asyncMemoize(getById_1.getByIdQuery(Tables_1.EntityTable.Starship, [
        {
            tableName: Tables_1.EntityTable.Film,
            showFields: [Film_1.FilmFieldsNames.Id, Film_1.FilmFieldsNames.Title],
            fieldNameInResponse: 'films',
            manyToManyTableName: Tables_1.ManyToManyTable.StarshipsInFilms,
            intersectEntityOn: StarshipsInFilms_1.StarshipsInFilmsFields.FilmId,
            where: StarshipsInFilms_1.StarshipsInFilmsFields.StarshipId
        },
        {
            tableName: Tables_1.EntityTable.People,
            showFields: [People_1.IPeopleEntityFields.Id, People_1.IPeopleEntityFields.Name],
            fieldNameInResponse: 'pilots',
            manyToManyTableName: Tables_1.ManyToManyTable.StarshipPilot,
            intersectEntityOn: StarshipPilot_1.StarshipPilotFieldsNames.PeopleId,
            where: StarshipPilot_1.StarshipPilotFieldsNames.StarshipId
        }
    ]));
    return {
        getById: _getById,
        getAll: getAll_1.getAll(Tables_1.EntityTable.Starship, _getById)
    };
})();
