import * as Knex from "knex";
import { Table } from "../types/Tables";


export async function up(knex: Knex): Promise<any> {
  return knex.schema.createTable(Table.VehiclesInFilms, (table:Knex.TableBuilder)=>{
    table.uuid('id').unique()
    table.uuid('vehicle_id').references('id').inTable(Table.Vehicle).onDelete('cascade')
    table.uuid('film_id').references('id').inTable(Table.Film).onDelete('cascade')
  })
}


export async function down(knex: Knex): Promise<any> {
  return knex.schema.dropTable(Table.VehiclesInFilms)
}

