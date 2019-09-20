"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Tables_1 = require("../types/Tables");
const original_starwars_api_1 = __importDefault(require("../original_starwars_api"));
const v1_1 = __importDefault(require("uuid/v1"));
async function seed(knex) {
    const data = await makeSpeciesInFilmsRelation(knex);
    return knex(Tables_1.Table.SpeciesInFilms)
        .del()
        .then(() => {
        return knex(Tables_1.Table.SpeciesInFilms).insert(buildSpeciesInFilmsEntity(data));
    });
}
exports.seed = seed;
const makeSpeciesInFilmsRelation = async (knex) => {
    const films = await original_starwars_api_1.default.Film();
    const filmsWithSpecies = films.map(async (film) => ({
        film: await knex
            .select('id')
            .from(Tables_1.Table.Film)
            .where('url', film.url),
        species: await knex
            .select('id')
            .from(Tables_1.Table.Specie)
            .whereIn('url', film.species)
    }));
    return Promise.all(filmsWithSpecies);
};
const buildSpeciesInFilmsEntity = (filmAndPlanets) => filmAndPlanets
    .map((obj) => obj.species.reduce((acc, curr) => [
    ...acc,
    {
        id: v1_1.default(),
        specie_id: curr.id,
        film_id: obj.film[0].id
    }
], []))
    .reduce((acc, curr) => [...acc, ...curr]);
