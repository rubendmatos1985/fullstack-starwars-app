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
const original_starwars_api_1 = __importDefault(require("../original_starwars_api"));
const v1_1 = __importDefault(require("uuid/v1"));
function seed(knex) {
    return __awaiter(this, void 0, void 0, function* () {
        const vehiclesInFilms = yield makeVehiclesInFilmsRelation(knex);
        return knex(Tables_1.Table.VehiclesInFilms)
            .del()
            .then(() => {
            return knex(Tables_1.Table.VehiclesInFilms).insert(buildVehiclesInFilmsEntity(vehiclesInFilms));
        });
    });
}
exports.seed = seed;
const makeVehiclesInFilmsRelation = (knex) => __awaiter(this, void 0, void 0, function* () {
    const films = yield original_starwars_api_1.default.Film();
    const vehiclesInFilms = films.map((film) => __awaiter(this, void 0, void 0, function* () {
        return ({
            film: yield knex
                .select('id')
                .from(Tables_1.Table.Film)
                .where('url', film.url),
            vehicles: yield knex
                .select('id')
                .from(Tables_1.Table.Vehicle)
                .whereIn('url', film.vehicles)
        });
    }));
    return Promise.all(vehiclesInFilms);
});
const buildVehiclesInFilmsEntity = (vehiclesAndFilms) => vehiclesAndFilms
    .map((obj) => obj.vehicles.reduce((acc, curr) => [
    ...acc,
    {
        id: v1_1.default(),
        vehicle_id: curr.id,
        film_id: obj.film[0].id
    }
], []))
    .reduce((acc, curr) => [...acc, ...curr]);
//# sourceMappingURL=10_vehicles_in_films.js.map