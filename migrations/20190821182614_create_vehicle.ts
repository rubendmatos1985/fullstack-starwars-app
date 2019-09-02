import Knex, { TableBuilder } from "knex";
import { Table } from "../types/Tables";


export async function up(knex: Knex): Promise<any> {
  return knex.schema.createTable(Table.Vehicle, (table: TableBuilder)=>{
    table.uuid('id').primary().unique()
    table.text('name')
    table.text('model')
    table.text('manufacturer')
    table.text('cost_in_credits')
    table.text('length')
    table.text('max_atmosphering_speed')
    table.text('crew')
    table.text('passengers')
    table.text('cargo_capacity')
    table.text('consumables')
    table.text('vehicle_class')
    table.text('url')
  })
}


export async function down(knex: Knex): Promise<any> {
  return knex.schema.dropTable('vehicle')
}

