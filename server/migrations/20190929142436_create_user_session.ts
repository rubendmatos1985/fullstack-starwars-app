


exports.up = async function(knex) {
    return knex.schema.createTable('user_session', (t)=>{
        t.text('sid').primary().unique().notNullable()
        t.json('sess').notNullable()
        t.timestamp('expire', { precision: 6 }).notNullable()

    })
}


exports.down = async function(knex){
    return knex.schema.dropTableIfExists('user_session')
}

