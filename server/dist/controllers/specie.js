"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getById_1 = require("../DB/getById");
const memoize_1 = require("../utils/memoize");
const Tables_1 = require("../types/Tables");
const People_1 = require("../types/interfaces/People");
const SpeciesInFilms_1 = require("../types/interfaces/SpeciesInFilms");
const Races_1 = require("../types/interfaces/Races");
const Film_1 = require("../types/interfaces/Film");
const getAll_1 = require("../DB/getAll");
exports.default = (() => {
    const _getById = memoize_1.asyncMemoize(getById_1.getByIdQuery(Tables_1.EntityTable.Specie, [
        {
            tableName: Tables_1.EntityTable.Film,
            showFields: [Film_1.FilmFieldsNames.Id, Film_1.FilmFieldsNames.Title],
            fieldNameInResponse: 'films',
            manyToManyTableName: Tables_1.ManyToManyTable.SpeciesInFilms,
            intersectEntityOn: SpeciesInFilms_1.SpeciesInFilmsFieldsName.FilmId,
            where: SpeciesInFilms_1.SpeciesInFilmsFieldsName.SpecieId
        },
        {
            tableName: Tables_1.EntityTable.People,
            showFields: [People_1.IPeopleEntityFields.Id, People_1.IPeopleEntityFields.Name],
            fieldNameInResponse: 'people',
            manyToManyTableName: Tables_1.OneToManyTable.Race,
            intersectEntityOn: Races_1.RaceFields.PeopleId,
            where: Races_1.RaceFields.SpecieId
        }
    ]));
    return {
        getById: _getById,
        getAll: getAll_1.getAll(Tables_1.EntityTable.Specie, _getById)
    };
})();
