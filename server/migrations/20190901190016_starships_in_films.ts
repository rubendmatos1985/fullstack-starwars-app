import * as Knex from 'knex';
import { Table } from '../models/Tables';

export async function up(knex: Knex): Promise<any> {
  return knex.schema.createTable(Table.StarshipsInFilms, (table: Knex.TableBuilder) => {
    table.uuid('id').unique();
    table
      .uuid('starship_id')
      .references('id')
      .inTable('starship')
      .onDelete('cascade');
    table
      .uuid('film_id')
      .references('id')
      .inTable('film')
      .onDelete('cascade');
  });
}

export async function down(knex: Knex): Promise<any> {
  return knex.schema.dropTable(Table.StarshipsInFilms);
}
