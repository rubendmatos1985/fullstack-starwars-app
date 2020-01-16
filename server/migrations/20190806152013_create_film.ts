import Knex, { TableBuilder } from 'knex';
import { Table } from '../models/Tables';
exports.up = function(knex: Knex) {
  return knex.schema.createTable(Table.Film, (table: TableBuilder) => {
    table
      .uuid('id')
      .primary()
      .unique();
    table.text('title');
    table.integer('episode_id');
    table.text('opening_crawl');
    table.text('director');
    table.text('producer');
    table.text('release_date');
    table.text('created');
    table.text('edited');
    table.text('url');
  });
};
exports.down = function(knex: Knex) {
  return knex.schema.dropTable('film');
};
