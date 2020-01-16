import * as Knex from 'knex';
import { Table } from '../models/Tables';

export async function up(knex: Knex): Promise<any> {
  return knex.schema.createTable(Table.SpeciesInFilms, (table: Knex.TableBuilder) => {
    table.uuid('id').unique();
    table
      .uuid('specie_id')
      .references('id')
      .inTable(Table.Specie)
      .onDelete('cascade');
    table
      .uuid('film_id')
      .references('id')
      .inTable(Table.Film)
      .onDelete('cascade');
  });
}

export async function down(knex: Knex): Promise<any> {
  return knex.schema.dropTable(Table.SpeciesInFilms);
}
