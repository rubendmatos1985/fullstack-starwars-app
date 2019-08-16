import Knex, { TableBuilder } from 'knex';
exports.up = function(knex:Knex) {
  return knex.schema.createTable('planet', (table:TableBuilder) => {
    table.uuid('id')
    table.text('name')
    table.text('rotation_period')
    table.text('orbital_period')
    table.text('diameter')
    table.text('climate')
    table.text('gravity')
    table.text('terrain')
    table.text('surface_water')
    table.text('population')
  })
}

exports.down = function(knex:Knex) {
  return knex.schema.dropTable('planet')
}
