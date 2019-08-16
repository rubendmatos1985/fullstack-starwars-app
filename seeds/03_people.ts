import * as Knex from "knex";
import fetchData from '../src/utils/fetchData';
import formatData from '../src/utils/formatData';
export async function seed(knex: Knex): Promise<any> {
    const d = await fetchData('https://swapi.co/api/people/');
    const data = formatData(d.results, [
       "name",
       "height",
       "mass",
       "hair_color",
       "skin_color",
       "eye_color",
       "birth_year",
       "gender",
       "created",
       "edited",
       "url" 
    ])
    return knex('people').del()
        .then(() => knex('people').insert(data));
};
