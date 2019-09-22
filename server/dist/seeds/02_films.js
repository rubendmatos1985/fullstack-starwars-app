"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Film_1 = require("../types/interfaces/Film");
const original_starwars_api_1 = __importDefault(require("../original_starwars_api"));
const mapData_1 = __importDefault(require("../utils/mapData"));
const Tables_1 = require("../types/Tables");
function seed(knex) {
    return __awaiter(this, void 0, void 0, function* () {
        const data = yield mapData_1.default(original_starwars_api_1.default.Film, [
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
    });
}
exports.seed = seed;
;
