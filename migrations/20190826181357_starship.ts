import * as Knex from "knex";
import { Table } from "../types/Tables";


export async function up(knex: Knex): Promise<any> {
  return knex.schema.createTable(Table.Starship, (t:Knex.TableBuilder)=>{
      t.uuid('id').unique()
      t.text('name')
      t.text('model')
      t.text('manufacturer')
      t.text('cost_in_credits')
      t.text('length')
      t.text('max_atmosphering_speed')
      t.text('crew')
      t.text('passengers')
      t.text('cargo_capacity')
      t.text('consumables')
      t.text('hyperdrive_rating')
      t.text('MGLT')
      t.text('starship_class')
      t.text('url')
      t.text('created')
      t.text('edited')
  })
}


export async function down(knex: Knex): Promise<any> {
  return knex.schema.dropTable(Table.Starship);
}

