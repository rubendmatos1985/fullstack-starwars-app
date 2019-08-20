import * as Knex from "knex";
import fetchData from '../utils/fetchData';
import formatData from '../utils/formatData';
export async function seed(knex: Knex): Promise<any> {
    const promeses: Promise<any>[] = 
      Array(9).fill(0)
        .map((_, i)=> fetchData(`https://swapi.co/api/people/?page=${i+1}`))
    const  d:object[] = await Promise.all(promeses)
      .then(v => v.reduce((acc, obj)=> [...acc, obj.results],[]).reduce((acc:any,o:any)=>[...acc, ...o] ,[]))
    const data = formatData(d, [
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
