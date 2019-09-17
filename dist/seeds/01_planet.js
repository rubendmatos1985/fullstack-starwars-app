"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mapData_1 = __importDefault(require("../utils/mapData"));
const original_starwars_api_1 = __importDefault(require("../original_starwars_api"));
const Tables_1 = require("../types/Tables");
async function seed(knex) {
    const data = await mapData_1.default(original_starwars_api_1.default.Planet, [
        'name',
        'rotation_period',
        'orbital_period',
        'diameter',
        'climate',
        'gravity',
        'terrain',
        'surface_water',
        'population',
        'url'
    ]);
    return knex(Tables_1.Table.Planet)
        .del()
        .then(function () {
        return knex(Tables_1.Table.Planet).insert(data);
    });
}
exports.seed = seed;
