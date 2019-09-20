"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Tables_1 = require("../types/Tables");
async function up(knex) {
    return knex.schema.createTable(Tables_1.Table.StarshipsInFilms, (table) => {
        table.uuid('id').unique();
        table.uuid('starship_id').references('id').inTable('starship').onDelete('cascade');
        table.uuid('film_id').references('id').inTable('film').onDelete('cascade');
    });
}
exports.up = up;
async function down(knex) {
    return knex.schema.dropTable(Tables_1.Table.StarshipsInFilms);
}
exports.down = down;
