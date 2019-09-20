"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Tables_1 = require("../types/Tables");
async function up(knex) {
    return knex.schema.createTable(Tables_1.Table.Pilot, (table) => {
        table.uuid('id').unique();
        table.uuid('vehicle_id').references('id').inTable(Tables_1.Table.Vehicle).onDelete('cascade');
        table.uuid('people_id').references('id').inTable(Tables_1.Table.People).onDelete('cascade');
    });
}
exports.up = up;
async function down(knex) {
    return knex.schema.dropTable('pilot');
}
exports.down = down;
