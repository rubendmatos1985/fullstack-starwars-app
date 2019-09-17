"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Film_1 = require("../types/interfaces/Film");
const original_starwars_api_1 = __importDefault(require("../original_starwars_api"));
const mapData_1 = __importDefault(require("../utils/mapData"));
const Tables_1 = require("../types/Tables");
async function seed(knex) {
    const data = await mapData_1.default(original_starwars_api_1.default.Film, [
        Film_1.FilmFieldsNames.Title,
        Film_1.FilmFieldsNames.EpisodeId,
        Film_1.FilmFieldsNames.OpeningCrawl,
        Film_1.FilmFieldsNames.Director,
        Film_1.FilmFieldsNames.Producer,
        Film_1.FilmFieldsNames.ReleaseDate,
        Film_1.FilmFieldsNames.Created,
        Film_1.FilmFieldsNames.Edited,
        Film_1.FilmFieldsNames.Url,
    ]);
    return knex(Tables_1.Table.Film).del()
        .then(() => knex(Tables_1.Table.Film).insert(data));
}
exports.seed = seed;
;
