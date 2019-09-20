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
const Vehicle_1 = require("../types/interfaces/Vehicle");
const mapData_1 = __importDefault(require("../utils/mapData"));
const original_starwars_api_1 = __importDefault(require("../original_starwars_api"));
function seed(knex) {
    return __awaiter(this, void 0, void 0, function* () {
        const data = yield mapData_1.default(original_starwars_api_1.default.Vehicle, [
            Vehicle_1.VehicleFieldsNames.Name,
            Vehicle_1.VehicleFieldsNames.Model,
            Vehicle_1.VehicleFieldsNames.Manufacturer,
            Vehicle_1.VehicleFieldsNames.CostInCredits,
            Vehicle_1.VehicleFieldsNames.Lenght,
            Vehicle_1.VehicleFieldsNames.MaxAtmospheringSpeed,
            Vehicle_1.VehicleFieldsNames.Crew,
            Vehicle_1.VehicleFieldsNames.Passengers,
            Vehicle_1.VehicleFieldsNames.CargoCapacity,
            Vehicle_1.VehicleFieldsNames.Consumables,
            Vehicle_1.VehicleFieldsNames.VehicleClass,
            Vehicle_1.VehicleFieldsNames.Url
        ]);
        return knex(Tables_1.Table.Vehicle).del()
            .then(() => {
            return knex(Tables_1.Table.Vehicle).insert(data);
        });
    });
}
exports.seed = seed;
;
