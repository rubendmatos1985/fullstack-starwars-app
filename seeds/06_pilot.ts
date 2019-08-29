import * as Knex from "knex";

export async function seed(knex: Knex): Promise<any> {
    return knex("pilot").del()
        .then(() => {
                      
            return knex("pilot").insert([]);
        });
};
