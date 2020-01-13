import * as Knex from "knex";


export async function up(knex: Knex): Promise<any> {
    return knex.schema.alterTable('user', (c:Knex.TableBuilder)=>{
        c.jsonb('scopes').alter()
    })
}


export async function down(knex: Knex): Promise<any> {
    return knex.schema.alterTable('user', (c:Knex.TableBuilder)=>{
        c.json('scopes').alter()
    })
}

