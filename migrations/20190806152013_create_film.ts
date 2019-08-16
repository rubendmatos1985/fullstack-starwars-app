import Knex, { TableBuilder } from "knex";

exports.up = function(knex:Knex) {
  return knex.schema.createTable('film', (table:TableBuilder) =>{
    table.uuid('id')
    table.text('title')
    table.integer('episode_id')
    table.text('opening_crawl')
    table.text('director')
    table.text('producer')
    table.text('release_date')
    table.date('created')
    table.date('edited')
    table.text('url')  
  })
};

exports.down = function(knex:Knex) {
  return knex.schema.dropTable('film');
};
