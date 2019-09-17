"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mapData_1 = __importDefault(require("../utils/mapData"));
const Starship_1 = require("../types/interfaces/Starship");
const original_starwars_api_1 = __importDefault(require("../original_starwars_api"));
const Tables_1 = require("../types/Tables");
async function seed(knex) {
    const data = await mapData_1.default(original_starwars_api_1.default.Starship, [
        Starship_1.StarshipEntityFields.Name,
        Starship_1.StarshipEntityFields.Model,
        Starship_1.StarshipEntityFields.Manufacturer,
        Starship_1.StarshipEntityFields.CostInCredits,
        Starship_1.StarshipEntityFields.Length,
        Starship_1.StarshipEntityFields.MaxAtmospheringSpeed,
        Starship_1.StarshipEntityFields.Crew,
        Starship_1.StarshipEntityFields.Passengers,
        Starship_1.StarshipEntityFields.CargoCapacity,
        Starship_1.StarshipEntityFields.Consumables,
        Starship_1.StarshipEntityFields.HyperdriveRating,
        Starship_1.StarshipEntityFields.MGLT,
        Starship_1.StarshipEntityFields.StarshipClass,
        Starship_1.StarshipEntityFields.Url,
        Starship_1.StarshipEntityFields.Created,
        Starship_1.StarshipEntityFields.Edited
    ]);
    return knex(Tables_1.Table.Starship)
        .del()
        .then(() => {
        return knex(Tables_1.Table.Starship).insert(data);
    });
}
exports.seed = seed;
