"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Tables_1 = require("../types/Tables");
async function up(knex) {
    return knex.schema.createTable(Tables_1.Table.Starship, (t) => {
        t.uuid('id').unique();
        t.text('name');
        t.text('model');
        t.text('manufacturer');
        t.text('cost_in_credits');
        t.text('length');
        t.text('max_atmosphering_speed');
        t.text('crew');
        t.text('passengers');
        t.text('cargo_capacity');
        t.text('consumables');
        t.text('hyperdrive_rating');
        t.text('MGLT');
        t.text('starship_class');
        t.text('url');
        t.text('created');
        t.text('edited');
    });
}
exports.up = up;
async function down(knex) {
    return knex.schema.dropTable(Tables_1.Table.Starship);
}
exports.down = down;
