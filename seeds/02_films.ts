import * as Knex from "knex";
import { IFilmFromApi, IFilmEntity } from '../models/Film';
import Api from '../api/';
import formatData from '../utils/formatData';
export async function seed(knex: Knex): Promise<any> {
    const data:IFilmEntity = await formatData(Api.Film, [
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
    return knex("film").del()
        .then(() => knex("film").insert(data));
};
