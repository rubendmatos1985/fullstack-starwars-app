import * as Knex from 'knex';
import { OneToManyTable, EntityTable } from '../models/Tables';

export async function up(knex: Knex): Promise<any> {
  return knex.schema.createTable(OneToManyTable.Race, (t: Knex.CreateTableBuilder) => {
    t
      .uuid('id')
      .primary()
      .unique(),
      t
        .uuid('people_id')
        .references('id')
        .inTable(EntityTable.People)
        .onDelete('cascade');
    t.uuid('specie_id')
      .references('id')
      .inTable(EntityTable.Specie)
      .onDelete('cascade');
  });
}

export async function down(knex: Knex): Promise<any> {
  return knex.schema.dropTable(OneToManyTable.Race);
}
