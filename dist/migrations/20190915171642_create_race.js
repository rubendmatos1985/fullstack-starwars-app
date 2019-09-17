"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Tables_1 = require("../types/Tables");
async function up(knex) {
    return knex.schema.createTable(Tables_1.OneToManyTable.Race, (t) => {
        t.uuid('id').primary().unique(),
            t.uuid('people_id').references('id').inTable(Tables_1.EntityTable.People).onDelete('cascade');
        t.uuid('specie_id').references('id').inTable(Tables_1.EntityTable.Specie).onDelete('cascade');
    });
}
exports.up = up;
async function down(knex) {
    return knex.schema.dropTable(Tables_1.OneToManyTable.Race);
}
exports.down = down;
