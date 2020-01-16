import * as Knex from 'knex';
import { Film, IFilmFromApi, FilmFieldsNames } from '../../server/models/Film'; //'../models/Film';
import Api from '../original_starwars_api';
import mapData from '../utils/mapData';
import { Table } from '../models/Tables';
export async function seed(knex: Knex): Promise<any> {
  const data: Film[] = await mapData<IFilmFromApi, Film>(Api.Film, [
    FilmFieldsNames.Title,
    FilmFieldsNames.EpisodeId,
    FilmFieldsNames.OpeningCrawl,
    FilmFieldsNames.Director,
    FilmFieldsNames.Producer,
    FilmFieldsNames.ReleaseDate,
    FilmFieldsNames.Created,
    FilmFieldsNames.Edited,
    FilmFieldsNames.Url
  ]);
  return knex(Table.Film)
    .del()
    .then(() => knex(Table.Film).insert(data));
}
