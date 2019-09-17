"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Tables_1 = require("../types/Tables");
async function up(knex) {
    return knex.schema.alterTable(Tables_1.Table.Specie, (table) => {
        table.uuid('homeworld').references('id').inTable('planet').onDelete('cascade');
    });
}
exports.up = up;
async function down(knex) {
    return knex.schema.alterTable('specie', (table) => {
        table.dropColumn('homeworld');
    });
}
exports.down = down;
