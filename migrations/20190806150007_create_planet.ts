import { TableBuilder } from "knex";

exports.up = function(knex:any) {
  return knex.schema.createTable('planet', (table:TableBuilder) => {
    table.uuid('id').primary().unique()
    table.text('name')
    table.text('rotation_period')
    table.text('orbital_period')
    table.text('diameter')
    table.text('climate')
    table.text('gravity')
    table.text('terrain')
    table.text('surface_water')
    table.text('population')
    table.text('url')
  })
}

exports.down = function(knex:any) {
  return knex.schema.dropTable('planet')
}
