"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Tables_1 = require("../types/Tables");
exports.up = function (knex) {
    return knex.schema.createTable(Tables_1.Table.Film, (table) => {
        table.uuid("id").primary().unique();
        table.text("title");
        table.integer("episode_id");
        table.text("opening_crawl");
        table.text("director");
        table.text("producer");
        table.text("release_date");
        table.text("created");
        table.text("edited");
        table.text("url");
    });
};
exports.down = function (knex) {
    return knex.schema.dropTable("film");
};
//# sourceMappingURL=20190806152013_create_film.js.map