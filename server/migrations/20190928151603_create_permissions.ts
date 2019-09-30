exports.up = async function (knex) {
    return knex.schema.createTable('permission', (t) => {
        t.uuid('id').primary().unique().notNullable()
        t.enu('name', [
            'all',
            'create',
            'write',
            'createUser',
            'delete',
            'deleteUser',
            'givePermission'], { useNative: true, enumName: 'PermissionType' })
    })
}


exports.down = async function (knex) {
    return knex.schema.dropTableIfExists('permission')
}
