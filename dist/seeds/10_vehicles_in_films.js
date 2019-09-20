"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Tables_1 = require("../types/Tables");
const original_starwars_api_1 = __importDefault(require("../original_starwars_api"));
const v1_1 = __importDefault(require("uuid/v1"));
async function seed(knex) {
    const vehiclesInFilms = await makeVehiclesInFilmsRelation(knex);
    return knex(Tables_1.Table.VehiclesInFilms)
        .del()
        .then(() => {
        return knex(Tables_1.Table.VehiclesInFilms).insert(buildVehiclesInFilmsEntity(vehiclesInFilms));
    });
}
exports.seed = seed;
const makeVehiclesInFilmsRelation = async (knex) => {
    const films = await original_starwars_api_1.default.Film();
    const vehiclesInFilms = films.map(async (film) => ({
        film: await knex
            .select('id')
            .from(Tables_1.Table.Film)
            .where('url', film.url),
        vehicles: await knex
            .select('id')
            .from(Tables_1.Table.Vehicle)
            .whereIn('url', film.vehicles)
    }));
    return Promise.all(vehiclesInFilms);
};
const buildVehiclesInFilmsEntity = (vehiclesAndFilms) => vehiclesAndFilms
    .map((obj) => obj.vehicles.reduce((acc, curr) => [
    ...acc,
    {
        id: v1_1.default(),
        vehicle_id: curr.id,
        film_id: obj.film[0].id
    }
], []))
    .reduce((acc, curr) => [...acc, ...curr]);
