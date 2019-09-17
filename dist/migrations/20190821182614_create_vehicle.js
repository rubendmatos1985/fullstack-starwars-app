"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Tables_1 = require("../types/Tables");
async function up(knex) {
    return knex.schema.createTable(Tables_1.Table.Vehicle, (table) => {
        table.uuid('id').primary().unique();
        table.text('name');
        table.text('model');
        table.text('manufacturer');
        table.text('cost_in_credits');
        table.text('length');
        table.text('max_atmosphering_speed');
        table.text('crew');
        table.text('passengers');
        table.text('cargo_capacity');
        table.text('consumables');
        table.text('vehicle_class');
        table.text('url');
    });
}
exports.up = up;
async function down(knex) {
    return knex.schema.dropTable('vehicle');
}
exports.down = down;
