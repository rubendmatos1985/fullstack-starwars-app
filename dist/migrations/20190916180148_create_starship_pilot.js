"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const Tables_1 = require("../types/Tables");
const StarshipPilot_1 = require("../types/interfaces/StarshipPilot");
const People_1 = require("../types/interfaces/People");
const Starship_1 = require("../types/interfaces/Starship");
function up(knex) {
    return __awaiter(this, void 0, void 0, function* () {
        return knex.schema.createTable(Tables_1.ManyToManyTable.StarshipPilot, (t) => {
            t.uuid(StarshipPilot_1.StarshipPilotFieldsNames.Id).primary().unique();
            t.uuid(StarshipPilot_1.StarshipPilotFieldsNames.PeopleId).references(People_1.IPeopleEntityFields.Id).inTable(Tables_1.EntityTable.People).onDelete('cascade');
            t.uuid(StarshipPilot_1.StarshipPilotFieldsNames.StarshipId).references(Starship_1.StarshipEntityFields.Id).inTable(Tables_1.EntityTable.Starship).onDelete('cascade');
        });
    });
}
exports.up = up;
function down(knex) {
    return __awaiter(this, void 0, void 0, function* () {
        return knex.schema.dropTable(Tables_1.ManyToManyTable.StarshipPilot);
    });
}
exports.down = down;
