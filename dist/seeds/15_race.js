"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Tables_1 = require("../types/Tables");
const People_1 = require("../types/interfaces/People");
const original_starwars_api_1 = __importDefault(require("../original_starwars_api"));
const DB_1 = require("../DB");
const Specie_1 = require("../types/interfaces/Specie");
const ramda_1 = require("ramda");
const v1_1 = __importDefault(require("uuid/v1"));
async function seed(knex) {
    const speciesFromApi = await original_starwars_api_1.default.Specie();
    const races = await buildRaceRelation(speciesFromApi);
    return knex(Tables_1.OneToManyTable.Race).del()
        .then(() => {
        return knex(Tables_1.OneToManyTable.Race).insert(races);
    });
}
exports.seed = seed;
;
const buildRaceRelation = async (s) => await Promise.all(s.map(async (sp) => ({
    id: await DB_1.knex
        .select(Specie_1.ISpecieEntityFields.Id)
        .from(Tables_1.Table.Specie)
        .where(Specie_1.ISpecieEntityFields.Url, sp.url)
        .then(v => ramda_1.flatten(v).map(v => v.id)[0]),
    people: await Promise.all(sp.people.map(async (url) => await DB_1.knex
        .select(People_1.IPeopleEntityFields.Id)
        .from(Tables_1.Table.People).where(People_1.IPeopleEntityFields.Url, url)))
        .then(v => ramda_1.flatten(v).map(v => v.id))
})))
    .then((objects) => objects
    .map(({ id, people }) => people.reduce((acc, people_id) => ([
    ...acc,
    {
        id: v1_1.default(),
        specie_id: id,
        people_id
    }
]), []))
    .reduce((acc, curr) => ([...acc, ...curr]), []));
