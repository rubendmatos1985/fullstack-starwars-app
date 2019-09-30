exports.up = async function (knex) {
  return knex.schema.createTable('user_permissions', (t) => {
    t.uuid('id').primary().unique().notNullable()
    t.uuid('user_id').references('id').inTable('user')
    t.uuid('permission_id').references('id').inTable('permission')
  })
}


exports.down = async function (knex) {
  return knex.schema.dropTableIfExists('user_permissions')
}
