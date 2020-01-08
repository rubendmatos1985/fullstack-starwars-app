import { TableBuilder } from "knex"

exports.up =  async function (knex){
  return knex.schema.createTable('user', (t:TableBuilder) => {
    t.uuid('id').primary().unique().notNullable()
    t.text('name')
    t.text('email')
    t.date('created')
    t.text('password')
    t.date('updated')
    t.date('last_conexion'),
    t.uuid('api_key')
    t.json("scopes").defaultTo(JSON.stringify(['read']))
  })
}


exports.down = async function (knex) {
  return knex.schema.dropTableIfExists('user')
}

