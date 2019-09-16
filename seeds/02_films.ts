import * as Knex from "knex";
import { IFilmFromApi } from '../types/interfaces/Film';
import { Film } from '../types/DB';
import Api from '../original_starwars_api';
import mapData from '../utils/mapData';
import { Table } from "../types/Tables";
export async function seed(knex: Knex): Promise<any> {
    const data:Film[] = await mapData<IFilmFromApi, Film>(Api.Film, [
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
