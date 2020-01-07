import * as Knex from "knex";
import { ManyToManyTable, EntityTable } from "../types/Tables";
import { StarshipPilotFieldsNames } from "../types/interfaces/StarshipPilot";
import { PeopleEntityFields } from "../models/People";
import { StarshipEntityFields } from "../types/interfaces/Starship";


export async function up(knex: Knex): Promise<any> {
    return knex.schema.createTable(ManyToManyTable.StarshipPilot, (t: Knex.CreateTableBuilder) => {
        t.uuid(StarshipPilotFieldsNames.Id).primary().unique();
        t.uuid(StarshipPilotFieldsNames.PeopleId).references(PeopleEntityFields.Id).inTable(EntityTable.People).onDelete('cascade')
        t.uuid(StarshipPilotFieldsNames.StarshipId).references(StarshipEntityFields.Id).inTable(EntityTable.Starship).onDelete('cascade')
    })
}


export async function down(knex: Knex): Promise<any> {
    return knex.schema.dropTable(ManyToManyTable.StarshipPilot)
}

