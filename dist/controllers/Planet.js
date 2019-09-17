"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const memoize_1 = require("../utils/memoize");
const getById_1 = require("../DB/getById");
const Tables_1 = require("../types/Tables");
const getAll_1 = require("../DB/getAll");
exports.default = (() => {
    const _getById = memoize_1.asyncMemoize(getById_1.getByIdQuery(Tables_1.EntityTable.Planet, [
        {
            tableName: Tables_1.EntityTable.People,
            showFields: ['id', 'name'],
            fieldNameInResponse: 'residents',
            manyToManyTableName: Tables_1.ManyToManyTable.Resident,
            intersectEntityOn: 'people_id',
            where: 'planet_id'
        },
        {
            tableName: Tables_1.EntityTable.Film,
            showFields: ['id', 'title'],
            fieldNameInResponse: 'films',
            manyToManyTableName: Tables_1.ManyToManyTable.PlanetsInFilms,
            intersectEntityOn: 'film_id',
            where: 'planet_id'
        }
    ]));
    return {
        getById: _getById,
        getAll: getAll_1.getAll(Tables_1.EntityTable.Planet, _getById)
    };
})();
