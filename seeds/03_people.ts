import * as Knex from "knex";
import formatData from '../utils/formatData';
import Api from '../api';
import { IPeopleEntity, IPeopleFromApi } from '../models/People';

export async function seed(knex: Knex): Promise<any> {
    const peopleFromApi:IPeopleFromApi[] = await Api.People();
    const data:IPeopleEntity = formatData(peopleFromApi, [
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
