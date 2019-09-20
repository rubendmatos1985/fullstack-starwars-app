"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Tables_1 = require("../types/Tables");
const Starship_1 = require("../types/interfaces/Starship");
const original_starwars_api_1 = __importDefault(require("../original_starwars_api"));
const DB_1 = require("../DB");
const People_1 = require("../types/interfaces/People");
const ramda_1 = require("ramda");
const v1_1 = __importDefault(require("uuid/v1"));
async function seed(knex) {
    const starshipFromApi = await original_starwars_api_1.default.Starship();
    const starshipPilot = await buildStarshipPilot(starshipFromApi);
    return knex(Tables_1.ManyToManyTable.StarshipPilot).del()
        .then(() => {
        return knex(Tables_1.ManyToManyTable.StarshipPilot).insert(starshipPilot);
    });
}
exports.seed = seed;
;
const buildStarshipPilot = async (starshipFromApi) => await Promise.all(starshipFromApi.map(async (starship) => ({
    starship_id: await DB_1.knex
        .select(Starship_1.StarshipEntityFields.Id)
        .from(Tables_1.EntityTable.Starship)
        .where(Starship_1.StarshipEntityFields.Url, starship.url)
        .then((obj) => ramda_1.flatten(obj).map(v => v.id)[0]),
    people: ramda_1.flatten(await Promise.all(starship.pilots.map(async (url) => await DB_1.knex
        .select(People_1.IPeopleEntityFields.Id)
        .from(Tables_1.EntityTable.People)
        .where(People_1.IPeopleEntityFields.Url, url)
        .then((obj) => obj.reduce((acc, curr) => [...acc, curr.id], [])))))
})))
    .then((obj) => ramda_1.flatten(obj.map(({ starship_id, people }) => people.map((id) => ({
    id: v1_1.default(),
    starship_id,
    people_id: id
})))));
