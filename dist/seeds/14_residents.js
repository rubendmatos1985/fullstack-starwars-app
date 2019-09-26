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
const Tables_1 = require("../types/Tables");
const v1_1 = __importDefault(require("uuid/v1"));
const original_starwars_api_1 = __importDefault(require("../original_starwars_api"));
function seed(knex) {
    return __awaiter(this, void 0, void 0, function* () {
        const residentsRelation = yield makeResidentRelation(knex);
        return knex(Tables_1.ManyToManyTable.Resident).del()
            .then(() => {
            return knex(Tables_1.ManyToManyTable.Resident).insert(buildResidents(residentsRelation));
        });
    });
}
exports.seed = seed;
;
const makeResidentRelation = (knex) => __awaiter(this, void 0, void 0, function* () {
    const planets = yield original_starwars_api_1.default.Planet();
    const peopleWithPlanets = planets.map((planet) => __awaiter(this, void 0, void 0, function* () {
        return ({
            planet: yield knex
                .select('id')
                .from(Tables_1.EntityTable.Planet)
                .where('url', planet.url),
            people: yield knex
                .select('id')
                .from(Tables_1.EntityTable.People)
                .whereIn('url', planet.residents)
        });
    }));
    return Promise.all(peopleWithPlanets);
});
const buildResidents = (residents) => residents
    .map((obj) => obj.people.reduce((acc, curr) => [
    ...acc,
    {
        id: v1_1.default(),
        planet_id: obj.planet[0].id,
        people_id: curr.id
    }
], []))
    .reduce((acc, curr) => [...acc, ...curr]);
//# sourceMappingURL=14_residents.js.map