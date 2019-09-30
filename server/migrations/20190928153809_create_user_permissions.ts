import * as Knex from "knex";
import { UserFields } from "../types/interfaces/User";
import { EntityTable, ManyToManyTable } from "../types/Tables";
import { PermissionFields } from "../types/interfaces/Permission";


export async function up(knex: Knex): Promise<any> {
    return knex.schema.createTable(ManyToManyTable.UserPermissions, (t: Knex.TableBuilder) => {
        t.uuid('id').primary().unique().notNullable()
        t.uuid('user_id').references(UserFields.Id).inTable(EntityTable.User)
        t.uuid('permission_id').references(PermissionFields.Id).inTable(EntityTable.Permission)
       })
}


export async function down(knex: Knex): Promise<any> {
    return knex.schema.dropTableIfExists(ManyToManyTable.UserPermissions)
}
