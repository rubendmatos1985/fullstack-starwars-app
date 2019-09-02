import * as Knex from "knex";
import { Table } from "../types/Tables";

export async function seed(knex: Knex): Promise<any> {
    return knex(Table.Pilot).del()
        .then(() => {
           return knex(Table.Pilot).insert([]);
        });
};
