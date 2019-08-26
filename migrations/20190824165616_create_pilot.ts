import * as Knex from "knex";


export async function up(knex: Knex): Promise<any> {
  return knex.schema.createTable('pilot', (table:Knex.TableBuilder)=>{
    table.uuid('id').unique()
    table.uuid('vehicle_id').references('id').inTable('vehicle')
    table.uuid('people_id').references('id').inTable('people')
  })
}


export async function down(knex: Knex): Promise<any> {
  return knex.schema.dropTable('pilot')
}


