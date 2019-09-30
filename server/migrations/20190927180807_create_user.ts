exports.up =  async function (knex){
  return knex.schema.createTable('user', (t) => {
    t.uuid('id').primary().unique().notNullable()
    t.text('name')
    t.text('email')
    t.date('created')
    t.text('password')
    t.date('updated')
    t.date('last_conexion'),
    t.uuid('api_key')
  })
}


exports.down = async function (knex) {
  return knex.schema.dropTableIfExists('user')
}

