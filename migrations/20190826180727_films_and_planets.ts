import * as Knex from "knex";


export async function up(knex: Knex): Promise<any> {
  return knex.schema.createTable('planets_in_films', (t:Knex.TableBuilder)=>{
    t.uuid('id').unique()
    t.uuid('planet_id').references('id').inTable('planet')
    t.uuid('film_id').references('id').inTable('film')
  })
}


export async function down(knex: Knex): Promise<any>{
  return knex.schema.dropTable('planets_in_films');
}

