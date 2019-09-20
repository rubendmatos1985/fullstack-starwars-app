"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Tables_1 = require("../types/Tables");
const Vehicle_1 = require("../types/interfaces/Vehicle");
const mapData_1 = __importDefault(require("../utils/mapData"));
const original_starwars_api_1 = __importDefault(require("../original_starwars_api"));
async function seed(knex) {
    const data = await mapData_1.default(original_starwars_api_1.default.Vehicle, [
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
}
exports.seed = seed;
;
