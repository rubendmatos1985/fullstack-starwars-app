"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Tables_1 = require("../types/Tables");
exports.up = function (knex) {
    return knex.schema.createTable(Tables_1.Table.Planet, (table) => {
        table.uuid('id').primary().unique();
        table.text('name');
        table.text('rotation_period');
        table.text('orbital_period');
        table.text('diameter');
        table.text('climate');
        table.text('gravity');
        table.text('terrain');
        table.text('surface_water');
        table.text('population');
        table.text('url');
    });
};
exports.down = function (knex) {
    return knex.schema.dropTable('planet');
};
//# sourceMappingURL=20190806150007_create_planet.js.map