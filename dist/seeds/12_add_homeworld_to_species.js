"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const original_starwars_api_1 = __importDefault(require("../original_starwars_api"));
const Tables_1 = require("../types/Tables");
async function seed(knex) {
    const data = await makeRelation(knex).then((obj) => obj.map((v) => ({
        specie: v.specie.reduce((acc, v) => v.id, ''),
        homeworld: v.homeworld.reduce((acc, v) => v.id, '')
    })));
    const specieArray = await knex(Tables_1.Table.Specie).select('*');
    return knex(Tables_1.Table.Specie)
        .del()
        .then(() => {
        return knex(Tables_1.Table.Specie).insert(specieArray.map((s, i) => (Object.assign({}, s, { homeworld: data[i].homeworld ? data[i].homeworld : null }))));
    });
}
exports.seed = seed;
const makeRelation = async (knex) => {
    const fromApi = await original_starwars_api_1.default.Specie();
    const grouped = fromApi.map(async (obj) => ({
        specie: await knex
            .select('id')
            .from(Tables_1.Table.Specie)
            .where('url', obj.url),
        homeworld: await knex
            .select('id')
            .from(Tables_1.Table.Planet)
            .where('url', obj.homeworld)
    }));
    return Promise.all(grouped);
};
