"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Tables_1 = require("../types/Tables");
const v1_1 = __importDefault(require("uuid/v1"));
const original_starwars_api_1 = __importDefault(require("../original_starwars_api"));
async function seed(knex) {
    const residentsRelation = await makeResidentRelation(knex);
    return knex(Tables_1.ManyToManyTable.Resident).del()
        .then(() => {
        return knex(Tables_1.ManyToManyTable.Resident).insert(buildResidents(residentsRelation));
    });
}
exports.seed = seed;
;
const makeResidentRelation = async (knex) => {
    const planets = await original_starwars_api_1.default.Planet();
    const peopleWithPlanets = planets.map(async (planet) => ({
        planet: await knex
            .select('id')
            .from(Tables_1.EntityTable.Planet)
            .where('url', planet.url),
        people: await knex
            .select('id')
            .from(Tables_1.EntityTable.People)
            .whereIn('url', planet.residents)
    }));
    return Promise.all(peopleWithPlanets);
};
const buildResidents = (residents) => residents
    .map((obj) => obj.people.reduce((acc, curr) => [
    ...acc,
    {
        id: v1_1.default(),
        planet_id: obj.planet[0].id,
        people_id: curr.id
    }
], []))
    .reduce((acc, curr) => [...acc, ...curr]);
