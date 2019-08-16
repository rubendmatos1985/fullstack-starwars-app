import * as Knex from "knex";
import formatData from '../src/utils/formatData';
import getDataFromApi from '../src/utils/fetchData';
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
        .then(() => {
            return knex("film").insert(data);
        });
};
