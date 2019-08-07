exports.up = (knex) =>
  knex.schema.createTable('planet', table => {
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


exports.down = (knex) => knex.schema.dropTable('planet')

