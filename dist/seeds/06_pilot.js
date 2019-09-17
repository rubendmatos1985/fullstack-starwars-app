"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Tables_1 = require("../types/Tables");
const original_starwars_api_1 = __importDefault(require("../original_starwars_api"));
const Vehicle_1 = require("../types/interfaces/Vehicle");
const v1_1 = __importDefault(require("uuid/v1"));
const DB_1 = require("../DB");
const People_1 = require("../types/interfaces/People");
const ramda_1 = require("ramda");
async function seed(knex) {
    const vehiclesFromApi = await original_starwars_api_1.default.Vehicle();
    const r = await buildPilotRelation(vehiclesFromApi);
    return knex(Tables_1.Table.Pilot).del()
        .then(() => {
        return knex(Tables_1.Table.Pilot).insert(r);
    });
}
exports.seed = seed;
;
const buildPilotRelation = async (vehicles) => Promise.all(vehicles.map(async (v) => ({
    vehicle_id: await DB_1.knex
        .select(Vehicle_1.VehicleFieldsNames.Id)
        .from(Tables_1.EntityTable.Vehicle)
        .where(Vehicle_1.VehicleFieldsNames.Url, v.url),
    people: await Promise.all(v.pilots.map(async (url) => await DB_1.knex
        .select(People_1.IPeopleEntityFields.Id)
        .from(Tables_1.EntityTable.People)
        .where(People_1.IPeopleEntityFields.Url, url)))
})))
    .then((vehicle) => vehicle.map((obj) => ({
    vehicle_id: obj.vehicle_id[0].id,
    people: ramda_1.flatten(obj.people).map(v => v && v.id)
})))
    .then((obj) => ramda_1.flatten(obj.map(({ vehicle_id, people }) => people.reduce((acc, people_id) => [...acc, { id: v1_1.default(), vehicle_id, people_id }], []))))
    .catch((e) => console.log(e));
