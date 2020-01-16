import * as Knex from 'knex';
import { Table } from '../models/Tables';

export async function up(knex: Knex): Promise<any> {
  return knex.schema.createTable(Table.Actors, (t: Knex.TableBuilder) => {
    t.uuid('id').unique();
    t.uuid('people_id')
      .references('id')
      .inTable(Table.People)
      .onDelete('cascade');
    t.uuid('film_id')
      .references('id')
      .inTable(Table.Film)
      .onDelete('cascade');
  });
}

export async function down(knex: Knex): Promise<any> {
  return knex.schema.dropTable(Table.Actors);
}
