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
const Vehicle_1 = require("../types/interfaces/Vehicle");
const v1_1 = __importDefault(require("uuid/v1"));
const DB_1 = require("../DB");
const People_1 = require("../types/interfaces/People");
const ramda_1 = require("ramda");
function seed(knex) {
    return __awaiter(this, void 0, void 0, function* () {
        const vehiclesFromApi = yield original_starwars_api_1.default.Vehicle();
        const r = yield buildPilotRelation(vehiclesFromApi);
        return knex(Tables_1.Table.Pilot).del()
            .then(() => {
            return knex(Tables_1.Table.Pilot).insert(r);
        });
    });
}
exports.seed = seed;
;
const buildPilotRelation = (vehicles) => __awaiter(this, void 0, void 0, function* () {
    return Promise.all(vehicles.map((v) => __awaiter(this, void 0, void 0, function* () {
        return ({
            vehicle_id: yield DB_1.knex
                .select(Vehicle_1.VehicleFieldsNames.Id)
                .from(Tables_1.EntityTable.Vehicle)
                .where(Vehicle_1.VehicleFieldsNames.Url, v.url),
            people: yield Promise.all(v.pilots.map((url) => __awaiter(this, void 0, void 0, function* () {
                return yield DB_1.knex
                    .select(People_1.IPeopleEntityFields.Id)
                    .from(Tables_1.EntityTable.People)
                    .where(People_1.IPeopleEntityFields.Url, url);
            })))
        });
    })))
        .then((vehicle) => vehicle.map((obj) => ({
        vehicle_id: obj.vehicle_id[0].id,
        people: ramda_1.flatten(obj.people).map(v => v && v.id)
    })))
        .then((obj) => ramda_1.flatten(obj.map(({ vehicle_id, people }) => people.reduce((acc, people_id) => [...acc, { id: v1_1.default(), vehicle_id, people_id }], []))))
        .catch((e) => console.log(e));
});
