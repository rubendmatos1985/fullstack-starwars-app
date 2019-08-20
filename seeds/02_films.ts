import * as Knex from "knex";
import getDataFromApi from '../utils/fetchData';
import formatData from '../utils/formatData';
export async function seed(knex: Knex): Promise<any> {
    const d = await getDataFromApi('https://swapi.co/api/films/');
    const data = formatData(d.results, [
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
