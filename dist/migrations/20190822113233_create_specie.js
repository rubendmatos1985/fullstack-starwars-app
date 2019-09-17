"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Tables_1 = require("../types/Tables");
async function up(knex) {
    return knex.schema.createTable(Tables_1.Table.Specie, (table) => {
        table.uuid('id').primary().unique();
        table.text('name');
        table.text('classification');
        table.text('designation');
        table.text('average_height');
        table.text('skin_colors');
        table.text('hair_colors');
        table.text('eye_colors');
        table.text('average_lifespan');
        table.text('language');
        table.text('url');
    });
}
exports.up = up;
async function down(knex) {
    return knex.schema.dropTable('specie');
}
exports.down = down;
