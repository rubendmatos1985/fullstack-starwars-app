import * as Knex from "knex";


export async function up(knex: Knex): Promise<any> {
  return knex.schema.createTable('actors', (t:Knex.TableBuilder)=>{
    t.uuid('id').unique()
    t.uuid('people_id').references('id').inTable('people')
    t.uuid('film_id').references('id').inTable('film')

  })
}


export async function down(knex: Knex): Promise<any> {
  return knex.schema.dropTable('actors')
}

