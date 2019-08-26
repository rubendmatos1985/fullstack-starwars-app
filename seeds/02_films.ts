import * as Knex from "knex";
import getDataFromApi from '../utils/fetchData';
import { IFilmFromApi, IFilmEntity } from '../models/Film';
import Api from '../api/';
import formatData from '../utils/formatData';
export async function seed(knex: Knex): Promise<any> {
    const d:IFilmFromApi[] = await Api.Film();
    const data:IFilmEntity = formatData(d, [
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
