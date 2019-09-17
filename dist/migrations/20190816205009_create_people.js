"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Tables_1 = require("../types/Tables");
async function up(knex) {
    return knex.schema.createTable(Tables_1.Table.People, (table) => {
        table.uuid('id').primary().unique();
        table.text('name');
        table.text('height');
        table.text('mass');
        table.text('hair_color');
        table.text('skin_color');
        table.text('eye_color');
        table.text('birth_year');
        table.text('gender');
        table.text('created');
        table.text('edited');
        table.text('url');
    });
}
exports.up = up;
async function down(knex) {
    return knex.schema.dropTable('people');
}
exports.down = down;
