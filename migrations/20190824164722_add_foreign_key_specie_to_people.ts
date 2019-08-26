import * as Knex from "knex";
export async function up(knex: Knex): Promise<any> {
  return knex.schema.alterTable('people', (table: Knex.TableBuilder)=>{
    table.uuid('specie_id').references('id').inTable('specie')
  })
}
export async function down(knex: Knex): Promise<any> {
  return knex.schema.alterTable('people', (table:Knex.TableBuilder)=>{
    table.dropColumn('specie_id')
  })
}

