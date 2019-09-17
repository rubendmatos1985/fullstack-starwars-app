"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mapData_1 = __importDefault(require("../utils/mapData"));
const original_starwars_api_1 = __importDefault(require("../original_starwars_api"));
const Tables_1 = require("../types/Tables");
async function seed(knex) {
    const data = await mapData_1.default(original_starwars_api_1.default.People, [
        "name",
        "height",
        "mass",
        "hair_color",
        "skin_color",
        "eye_color",
        "birth_year",
        "gender",
        "created",
        "edited",
        "url"
    ]);
    return knex(Tables_1.Table.People).del()
        .then(() => knex(Tables_1.Table.People).insert(data));
}
exports.seed = seed;
;
