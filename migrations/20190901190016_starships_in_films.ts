import * as Knex from "knex";
import { Table } from '../types/Tables';

export async function up(knex: Knex): Promise<any> {
  return knex.schema.createTable(Table.StarshipsInFilms, (table:Knex.TableBuilder)=>{
    table.uuid('id').unique()
    table.uuid('starship_id').references('id').inTable('starship');
    table.uuid('film_id').references('id').inTable('film');
  })
}


export async function down(knex: Knex): Promise<any> {
  return knex.schema.dropTable(Table.StarshipsInFilms)
}

