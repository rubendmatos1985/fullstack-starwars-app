import * as Knex from "knex";
import mapData from '../utils/mapData';
import Api from '../api';
import { IPeopleEntity, IPeopleFromApi } from '../types/interfaces/People';
import { Table } from "../types/Tables";

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
    return knex(Table.People).del()
        .then(() => knex(Table.People).insert(data));
};
