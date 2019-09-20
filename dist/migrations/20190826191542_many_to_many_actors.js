"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Tables_1 = require("../types/Tables");
async function up(knex) {
    return knex.schema.createTable(Tables_1.Table.Actors, (t) => {
        t.uuid('id').unique();
        t.uuid('people_id').references('id').inTable(Tables_1.Table.People).onDelete('cascade');
        t.uuid('film_id').references('id').inTable(Tables_1.Table.Film).onDelete('cascade');
    });
}
exports.up = up;
async function down(knex) {
    return knex.schema.dropTable(Tables_1.Table.Actors);
}
exports.down = down;
