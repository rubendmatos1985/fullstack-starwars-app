import * as Knex from "knex";
import { TableBuilder } from 'knex';

export async function up(knex: Knex): Promise<any> {
  knex.schema.createTable('people', (table:TableBuilder)=>{
    table.uuid('id')
    table.text('name')
    table.text('height')
    table.text('mass')
    table.text('hair_color')
    table.text('skin_color')
    table.text('eye_color')
    table.text('birth_year')
    table.text('gender')
    table.foreign('homeworld')
    table.foreign('species')
    table.foreign('vehicles')
    table.text('created')
    table.text('edited')
    table.text('url')
  })
}


export async function down(knex: Knex): Promise<any> {
  knex.schema.dropTable('people')
}

