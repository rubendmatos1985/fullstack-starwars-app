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
const mapData_1 = __importDefault(require("../utils/mapData"));
const Specie_1 = require("../types/interfaces/Specie");
const original_starwars_api_1 = __importDefault(require("../original_starwars_api"));
const Tables_1 = require("../types/Tables");
function seed(knex) {
    return __awaiter(this, void 0, void 0, function* () {
        const data = yield mapData_1.default(original_starwars_api_1.default.Specie, [
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
    });
}
exports.seed = seed;
;
