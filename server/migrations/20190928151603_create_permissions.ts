import * as Knex from "knex";
import { UserFields } from "../types/interfaces/User";
import { EntityTable } from "../types/Tables";
import { PermissionType } from "../types/interfaces/Permission";


export async function up(knex: Knex): Promise<any> {
    return knex.schema.createTable(EntityTable.Permission, (t: Knex.TableBuilder) => {
        t.uuid(UserFields.Id).primary().unique().notNullable()
        t.enu('name', [
            PermissionType.All, 
            PermissionType.Create, 
            PermissionType.CreateUser, 
            PermissionType.Delete, 
            PermissionType.DeleteUser, 
            PermissionType.Edit, 
            PermissionType.GivePermission], { useNative: true, enumName: 'PermissionType' } as Knex.EnumOptions)
    })
}


export async function down(knex: Knex): Promise<any> {
    return knex.schema.dropTableIfExists(EntityTable.Permission)
}
