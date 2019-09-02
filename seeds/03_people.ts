import * as Knex from "knex";
import mapData from '../utils/mapData';
import Api from '../api';
import { IPeopleEntity, IPeopleFromApi } from '../types/interfaces/People';

export async function seed(knex: Knex): Promise<any> {
    const data:IPeopleEntity[] = await mapData<IPeopleFromApi, IPeopleEntity>(Api.People, [
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
