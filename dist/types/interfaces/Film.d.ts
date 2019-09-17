import { IFromForeignTables } from './FromForeignTables';
export interface IFilmFromApi {
    title: string;
    episode_id: number;
    opening_crawl: string;
    director: string;
    producer: string;
    release_date: string;
    characters: string[];
    planets: string[];
    starships: string[];
    vehicles: string[];
    species: string[];
    created: string;
    edited: string;
    url: string;
}
export declare namespace FilmFields {
    type id = string;
    type title = string | null;
    type episode_id = number | null;
    type opening_crawl = string | null;
    type director = string | null;
    type producer = string | null;
    type release_date = string | null;
    type created = string | null;
    type edited = string | null;
    type url = string | null;
}
export declare enum FilmFieldsNames {
    Id = "id",
    Title = "title",
    EpisodeId = "episode_id",
    OpeningCrawl = "opening_crawl",
    Director = "director",
    Producer = "producer",
    ReleaseDate = "release_date",
    Created = "created",
    Edited = "edited",
    Url = "url"
}
export interface Film {
    id: FilmFields.id;
    title: FilmFields.title;
    episode_id: FilmFields.episode_id;
    opening_crawl: FilmFields.opening_crawl;
    director: FilmFields.director;
    producer: FilmFields.producer;
    release_date: FilmFields.release_date;
    created: FilmFields.created;
    edited: FilmFields.edited;
    url: FilmFields.url;
}
export interface IFilmResponse extends Film {
    characters: IFromForeignTables[];
    planets: IFromForeignTables[];
    starships: IFromForeignTables[];
    vehicles: IFromForeignTables[];
}
