"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const original_starwars_api_1 = __importDefault(require("../original_starwars_api"));
const v1_1 = __importDefault(require("uuid/v1"));
async function seed(knex) {
    const actors = await buildAsyncActor(knex);
    return knex('actors')
        .del()
        .then(() => {
        return knex('actors').insert(buildActorsEntity(actors));
    });
}
exports.seed = seed;
const buildAsyncActor = async (knex) => {
    const films = await original_starwars_api_1.default.Film();
    const actor = films.map(async (film) => ({
        film: await knex
            .select('id')
            .from('film')
            .where('url', film.url),
        people: await knex
            .select('id')
            .from('people')
            .whereIn('url', film.characters)
    }));
    return Promise.all(actor);
};
const buildActorsEntity = (actors) => actors
    .map((obj) => obj.people.reduce((acc, curr) => [
    ...acc,
    {
        id: v1_1.default(),
        people_id: curr.id,
        film_id: obj.film[0].id
    }
], []))
    .reduce((acc, curr) => [...acc, ...curr]);
