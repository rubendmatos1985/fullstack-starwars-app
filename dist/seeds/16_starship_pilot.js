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
const Starship_1 = require("../types/interfaces/Starship");
const original_starwars_api_1 = __importDefault(require("../original_starwars_api"));
const DB_1 = require("../DB");
const People_1 = require("../types/interfaces/People");
const ramda_1 = require("ramda");
const v1_1 = __importDefault(require("uuid/v1"));
function seed(knex) {
    return __awaiter(this, void 0, void 0, function* () {
        const starshipFromApi = yield original_starwars_api_1.default.Starship();
        const starshipPilot = yield buildStarshipPilot(starshipFromApi);
        return knex(Tables_1.ManyToManyTable.StarshipPilot).del()
            .then(() => {
            return knex(Tables_1.ManyToManyTable.StarshipPilot).insert(starshipPilot);
        });
    });
}
exports.seed = seed;
;
const buildStarshipPilot = (starshipFromApi) => __awaiter(this, void 0, void 0, function* () {
    return yield Promise.all(starshipFromApi.map((starship) => __awaiter(this, void 0, void 0, function* () {
        return ({
            starship_id: yield DB_1.knex
                .select(Starship_1.StarshipEntityFields.Id)
                .from(Tables_1.EntityTable.Starship)
                .where(Starship_1.StarshipEntityFields.Url, starship.url)
                .then((obj) => ramda_1.flatten(obj).map(v => v.id)[0]),
            people: ramda_1.flatten(yield Promise.all(starship.pilots.map((url) => __awaiter(this, void 0, void 0, function* () {
                return yield DB_1.knex
                    .select(People_1.IPeopleEntityFields.Id)
                    .from(Tables_1.EntityTable.People)
                    .where(People_1.IPeopleEntityFields.Url, url)
                    .then((obj) => obj.reduce((acc, curr) => [...acc, curr.id], []));
            }))))
        });
    })))
        .then((obj) => ramda_1.flatten(obj.map(({ starship_id, people }) => people.map((id) => ({
        id: v1_1.default(),
        starship_id,
        people_id: id
    })))));
});
