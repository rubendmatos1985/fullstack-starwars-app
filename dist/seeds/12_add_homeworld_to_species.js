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
function seed(knex) {
    return __awaiter(this, void 0, void 0, function* () {
        const data = yield makeRelation(knex).then((obj) => obj.map((v) => ({
            specie: v.specie.reduce((acc, v) => v.id, ''),
            homeworld: v.homeworld.reduce((acc, v) => v.id, '')
        })));
        const specieArray = yield knex(Tables_1.Table.Specie).select('*');
        return knex(Tables_1.Table.Specie)
            .del()
            .then(() => {
            return knex(Tables_1.Table.Specie).insert(specieArray.map((s, i) => (Object.assign({}, s, { homeworld: data[i].homeworld ? data[i].homeworld : null }))));
        });
    });
}
exports.seed = seed;
const makeRelation = (knex) => __awaiter(this, void 0, void 0, function* () {
    const fromApi = yield original_starwars_api_1.default.Specie();
    const grouped = fromApi.map((obj) => __awaiter(this, void 0, void 0, function* () {
        return ({
            specie: yield knex
                .select('id')
                .from(Tables_1.Table.Specie)
                .where('url', obj.url),
            homeworld: yield knex
                .select('id')
                .from(Tables_1.Table.Planet)
                .where('url', obj.homeworld)
        });
    }));
    return Promise.all(grouped);
});
//# sourceMappingURL=12_add_homeworld_to_species.js.map