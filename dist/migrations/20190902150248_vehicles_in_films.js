"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Tables_1 = require("../types/Tables");
async function up(knex) {
    return knex.schema.createTable(Tables_1.Table.VehiclesInFilms, (table) => {
        table.uuid('id').unique();
        table.uuid('vehicle_id').references('id').inTable(Tables_1.Table.Vehicle).onDelete('cascade');
        table.uuid('film_id').references('id').inTable(Tables_1.Table.Film).onDelete('cascade');
    });
}
exports.up = up;
async function down(knex) {
    return knex.schema.dropTable(Tables_1.Table.VehiclesInFilms);
}
exports.down = down;
