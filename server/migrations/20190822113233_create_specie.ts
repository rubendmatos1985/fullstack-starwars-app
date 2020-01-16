import * as Knex from 'knex';
import { Table } from '../models/Tables';

export async function up(knex: Knex): Promise<any> {
  return knex.schema.createTable(Table.Specie, (table: Knex.TableBuilder) => {
    table
      .uuid('id')
      .primary()
      .unique();
    table.text('name');
    table.text('classification');
    table.text('designation');
    table.text('average_height');
    table.text('skin_colors');
    table.text('hair_colors');
    table.text('eye_colors');
    table.text('average_lifespan');
    table.text('language');
    table.text('url');
  });
}

export async function down(knex: Knex): Promise<any> {
  return knex.schema.dropTable('specie');
}
