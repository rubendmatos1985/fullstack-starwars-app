import * as Knex from 'knex';
import { Table } from '../models/Tables';
export async function up(knex: Knex): Promise<any> {
  return knex.schema.alterTable(Table.Specie, (table: Knex.TableBuilder) => {
    table
      .uuid('homeworld')
      .references('id')
      .inTable('planet')
      .onDelete('cascade');
  });
}
export async function down(knex: Knex): Promise<any> {
  return knex.schema.alterTable('specie', (table: Knex.TableBuilder) => {
    table.dropColumn('homeworld');
  });
}
