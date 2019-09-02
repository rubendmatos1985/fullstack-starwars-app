import * as Knex from "knex";
import { Table } from "../types/Tables";
export async function up(knex: Knex): Promise<any> {
  return knex.schema.alterTable(Table.People, (table: Knex.TableBuilder)=>{
    table.uuid('specie_id').references('id').inTable(Table.Specie)
  })
}
export async function down(knex: Knex): Promise<any> {
  return knex.schema.alterTable('people', (table:Knex.TableBuilder)=>{
    table.dropColumn('specie_id')
  })
}

