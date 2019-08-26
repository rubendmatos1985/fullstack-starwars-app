import * as Knex from "knex";

export async function up(knex: Knex): Promise<any> {
  return knex.schema.createTable("character", (table: Knex.TableBuilder) => {
    table.uuid("id").unique();
    table
      .uuid("people_id")
      .references("id")
      .inTable("people")
    table
      .uuid("film_id")
      .references("id")
      .inTable("film")
  });
}

export async function down(knex: Knex): Promise<any> {
  return knex.schema.dropTable("character");
}
