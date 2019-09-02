import * as Knex from "knex";
import { Table } from "../types/Tables";


export async function up(knex: Knex): Promise<any> {
  return knex.schema.createTable(Table.PlanetsInFilms, (t:Knex.TableBuilder)=>{
    t.uuid('id').unique()
    t.uuid('planet_id').references('id').inTable(Table.Planet).onDelete('cascade')
    t.uuid('film_id').references('id').inTable(Table.Film).onDelete('cascade')
  })
}


export async function down(knex: Knex): Promise<any>{
  return knex.schema.dropTable('planets_in_films');
}

