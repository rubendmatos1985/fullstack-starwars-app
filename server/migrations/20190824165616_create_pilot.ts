import * as Knex from 'knex';
import { Table } from '../models/Tables';

export async function up(knex: Knex): Promise<any> {
  return knex.schema.createTable(Table.Pilot, (table: Knex.TableBuilder) => {
    table.uuid('id').unique();
    table
      .uuid('vehicle_id')
      .references('id')
      .inTable(Table.Vehicle)
      .onDelete('cascade');
    table
      .uuid('people_id')
      .references('id')
      .inTable(Table.People)
      .onDelete('cascade');
  });
}

export async function down(knex: Knex): Promise<any> {
  return knex.schema.dropTable('pilot');
}
