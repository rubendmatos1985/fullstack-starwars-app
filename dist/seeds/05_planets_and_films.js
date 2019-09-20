"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const original_starwars_api_1 = __importDefault(require("../original_starwars_api"));
const v1_1 = __importDefault(require("uuid/v1"));
async function seed(knex) {
    const filmAndPlanets = await getFilmsAndPlanetsFromApi(knex);
    return knex('planets_in_films')
        .del()
        .then((v) => {
        return knex('planets_in_films').insert(buildFilmAndPlanetsEntity(filmAndPlanets));
    });
}
exports.seed = seed;
const getFilmsAndPlanetsFromApi = async (knex) => {
    const films = await original_starwars_api_1.default.Film();
    const filmWithPlanets = films.map(async (film) => ({
        film: await knex
            .select('id')
            .from('film')
            .where('url', film.url),
        planets: await knex
            .select('id')
            .from('planet')
            .whereIn('url', film.planets)
    }));
    return Promise.all(filmWithPlanets);
};
const buildFilmAndPlanetsEntity = (filmAndPlanets) => filmAndPlanets
    .map((obj) => obj.planets.reduce((acc, curr) => [
    ...acc,
    {
        id: v1_1.default(),
        planet_id: curr.id,
        film_id: obj.film[0].id
    }
], []))
    .reduce((acc, curr) => [...acc, ...curr]);
