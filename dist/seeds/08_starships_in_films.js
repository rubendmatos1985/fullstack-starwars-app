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
const original_starwars_api_1 = __importDefault(require("../original_starwars_api"));
const Tables_1 = require("../types/Tables");
const v1_1 = __importDefault(require("uuid/v1"));
function seed(knex) {
    return __awaiter(this, void 0, void 0, function* () {
        const filmsAndStarships = yield makeStarshipsInFilmsRelation(knex);
        return knex(Tables_1.Table.StarshipsInFilms)
            .del()
            .then(() => {
            return knex(Tables_1.Table.StarshipsInFilms).insert(buildStarshipsInFilmsEntity(filmsAndStarships));
        });
    });
}
exports.seed = seed;
const makeStarshipsInFilmsRelation = (knex) => __awaiter(this, void 0, void 0, function* () {
    const films = yield original_starwars_api_1.default.Film();
    const filmWithStarships = films.map((film) => __awaiter(this, void 0, void 0, function* () {
        return ({
            film: yield knex
                .select('id')
                .from(Tables_1.Table.Film)
                .where('url', film.url),
            starships: yield knex
                .select('id')
                .from(Tables_1.Table.Starship)
                .whereIn('url', film.starships)
        });
    }));
    return Promise.all(filmWithStarships);
});
const buildStarshipsInFilmsEntity = (filmAndPlanets) => filmAndPlanets
    .map((obj) => obj.starships.reduce((acc, curr) => [
    ...acc,
    {
        id: v1_1.default(),
        starship_id: curr.id,
        film_id: obj.film[0].id
    }
], []))
    .reduce((acc, curr) => [...acc, ...curr]);