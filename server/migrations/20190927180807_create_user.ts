import * as Knex from "knex";
import { UserFields } from "../types/interfaces/User";
import { EntityTable } from "../types/Tables";


export async function up(knex: Knex): Promise<any> {
  return knex.schema.createTable(EntityTable.User, (t: Knex.TableBuilder) => {
    t.uuid(UserFields.Id).primary().unique().notNullable()
    t.text(UserFields.Name)
    t.text(UserFields.Email)
    t.date(UserFields.Created)
    t.date(UserFields.Updated)
    t.date(UserFields.LastConexion),
    t.uuid(UserFields.ApiKey)
  })
}


export async function down(knex: Knex): Promise<any> {
  return knex.schema.dropTableIfExists(EntityTable.User)
}

