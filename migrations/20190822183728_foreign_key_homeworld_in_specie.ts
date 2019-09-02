import * as Knex from "knex";
import { Table } from "../types/Tables";
export async function up(knex: Knex): Promise<any> {
  return knex.schema.alterTable(Table.Specie, (table:Knex.TableBuilder)=>{
    table.uuid('homeworld').references('id').inTable('planet')
  })
}
export async function down(knex: Knex): Promise<any> {
  return knex.schema.alterTable('specie', (table:Knex.TableBuilder)=>{
    table.dropColumn('homeworld');
  })
}

