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
const v1_1 = __importDefault(require("uuid/v1"));
function seed(knex) {
    return __awaiter(this, void 0, void 0, function* () {
        const actors = yield buildAsyncActor(knex);
        return knex('actors')
            .del()
            .then(() => {
            return knex('actors').insert(buildActorsEntity(actors));
        });
    });
}
exports.seed = seed;
const buildAsyncActor = (knex) => __awaiter(this, void 0, void 0, function* () {
    const films = yield original_starwars_api_1.default.Film();
    const actor = films.map((film) => __awaiter(this, void 0, void 0, function* () {
        return ({
            film: yield knex
                .select('id')
                .from('film')
                .where('url', film.url),
            people: yield knex
                .select('id')
                .from('people')
                .whereIn('url', film.characters)
        });
    }));
    return Promise.all(actor);
});
const buildActorsEntity = (actors) => actors
    .map((obj) => obj.people.reduce((acc, curr) => [
    ...acc,
    {
        id: v1_1.default(),
        people_id: curr.id,
        film_id: obj.film[0].id
    }
], []))
    .reduce((acc, curr) => [...acc, ...curr]);
