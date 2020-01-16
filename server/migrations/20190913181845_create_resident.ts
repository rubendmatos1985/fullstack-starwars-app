import * as Knex from 'knex';
import { ManyToManyTable, EntityTable } from '../models/Tables';

export async function up(knex: Knex): Promise<any> {
  return knex.schema.createTable(ManyToManyTable.Resident, (t: Knex.CreateTableBuilder) => {
    t.uuid('id')
      .primary()
      .unique();
    t.uuid('planet_id')
      .references('id')
      .inTable(EntityTable.Planet)
      .onDelete('cascade');
    t.uuid('people_id')
      .references('id')
      .inTable(EntityTable.People)
      .onDelete('cascade');
  });
}

export async function down(knex: Knex): Promise<any> {
  return knex.schema.dropTableIfExists(ManyToManyTable.Resident);
}
