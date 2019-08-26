import * as Knex from "knex";
import fetchData from '../utils/fetchData';
export async function seed(knex: Knex): Promise<any> {
    
    return knex("actors").del()
        .then(() => {
            return knex("actors").insert([
                
            ]);
        });
};
