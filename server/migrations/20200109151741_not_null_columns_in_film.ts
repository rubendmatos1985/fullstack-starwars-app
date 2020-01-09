import * as Knex from "knex";


export async function up(knex: Knex): Promise<any> {
   return knex.schema.alterTable('film', (column: Knex.TableBuilder)=>{
       column.string('title').notNullable().alter()
       column.integer('episode_id').notNullable().alter()
       column.string('director').notNullable().alter()
       column.string('producer').notNullable().alter()
   })
}


export async function down(knex: Knex): Promise<any> {
    return knex.schema.alterTable('film', (column: Knex.TableBuilder)=>{
        column.string('title').nullable().alter()
        column.integer('episode_id').nullable().alter()
        column.string('director').nullable().alter()
        column.string('producer').nullable().alter()
    })
}

