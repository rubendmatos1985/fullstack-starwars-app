"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Tables_1 = require("../types/Tables");
const StarshipPilot_1 = require("../types/interfaces/StarshipPilot");
const People_1 = require("../types/interfaces/People");
const Starship_1 = require("../types/interfaces/Starship");
async function up(knex) {
    return knex.schema.createTable(Tables_1.ManyToManyTable.StarshipPilot, (t) => {
        t.uuid(StarshipPilot_1.StarshipPilotFieldsNames.Id).primary().unique();
        t.uuid(StarshipPilot_1.StarshipPilotFieldsNames.PeopleId).references(People_1.IPeopleEntityFields.Id).inTable(Tables_1.EntityTable.People).onDelete('cascade');
        t.uuid(StarshipPilot_1.StarshipPilotFieldsNames.StarshipId).references(Starship_1.StarshipEntityFields.Id).inTable(Tables_1.EntityTable.Starship).onDelete('cascade');
    });
}
exports.up = up;
async function down(knex) {
    return knex.schema.dropTable(Tables_1.ManyToManyTable.StarshipPilot);
}
exports.down = down;
