"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mapData_1 = __importDefault(require("../utils/mapData"));
const Specie_1 = require("../types/interfaces/Specie");
const original_starwars_api_1 = __importDefault(require("../original_starwars_api"));
const Tables_1 = require("../types/Tables");
async function seed(knex) {
    const data = await mapData_1.default(original_starwars_api_1.default.Specie, [
        Specie_1.ISpecieEntityFields.Name,
        Specie_1.ISpecieEntityFields.Classification,
        Specie_1.ISpecieEntityFields.Designation,
        Specie_1.ISpecieEntityFields.AverageHeight,
        Specie_1.ISpecieEntityFields.SkinColors,
        Specie_1.ISpecieEntityFields.HairColors,
        Specie_1.ISpecieEntityFields.EyeColors,
        Specie_1.ISpecieEntityFields.AverageLifespan,
        Specie_1.ISpecieEntityFields.Language,
        Specie_1.ISpecieEntityFields.Url
    ]);
    return knex(Tables_1.Table.Specie).del()
        .then(() => {
        return knex(Tables_1.Table.Specie).insert(data);
    });
}
exports.seed = seed;
;
