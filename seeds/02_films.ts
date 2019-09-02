import * as Knex from "knex";
import { IFilmFromApi, IFilmEntity } from '../types/interfaces/Film';
import Api from '../api/';
import mapData from '../utils/mapData';
import { Table } from "../types/Tables";
export async function seed(knex: Knex): Promise<any> {
    const data:IFilmEntity[] = await mapData<IFilmFromApi, IFilmEntity>(Api.Film, [
        "title",
        "episode_id",
        "opening_crawl",
        "director",
        "producer",
        "release_date",
        "created",
        "edited",
        "url"
    ])
    return knex(Table.Film).del()
        .then(() => knex(Table.Film).insert(data));
};
