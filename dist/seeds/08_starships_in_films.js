"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const original_starwars_api_1 = __importDefault(require("../original_starwars_api"));
const Tables_1 = require("../types/Tables");
const v1_1 = __importDefault(require("uuid/v1"));
async function seed(knex) {
    const filmsAndStarships = await makeStarshipsInFilmsRelation(knex);
    return knex(Tables_1.Table.StarshipsInFilms)
        .del()
        .then(() => {
        return knex(Tables_1.Table.StarshipsInFilms).insert(buildStarshipsInFilmsEntity(filmsAndStarships));
    });
}
exports.seed = seed;
const makeStarshipsInFilmsRelation = async (knex) => {
    const films = await original_starwars_api_1.default.Film();
    const filmWithStarships = films.map(async (film) => ({
        film: await knex
            .select('id')
            .from(Tables_1.Table.Film)
            .where('url', film.url),
        starships: await knex
            .select('id')
            .from(Tables_1.Table.Starship)
            .whereIn('url', film.starships)
    }));
    return Promise.all(filmWithStarships);
};
const buildStarshipsInFilmsEntity = (filmAndPlanets) => filmAndPlanets
    .map((obj) => obj.starships.reduce((acc, curr) => [
    ...acc,
    {
        id: v1_1.default(),
        starship_id: curr.id,
        film_id: obj.film[0].id
    }
], []))
    .reduce((acc, curr) => [...acc, ...curr]);
