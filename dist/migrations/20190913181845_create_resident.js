"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Tables_1 = require("../types/Tables");
async function up(knex) {
    return knex.schema.createTable(Tables_1.ManyToManyTable.Resident, (t) => {
        t.uuid('id').primary().unique();
        t.uuid('planet_id').references('id').inTable(Tables_1.EntityTable.Planet).onDelete('cascade');
        t.uuid('people_id').references('id').inTable(Tables_1.EntityTable.People).onDelete('cascade');
    });
}
exports.up = up;
async function down(knex) {
    return knex.schema.dropTableIfExists(Tables_1.ManyToManyTable.Resident);
}
exports.down = down;
