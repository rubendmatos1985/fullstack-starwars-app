import {IFromForeignTables} from './ViewModels/FromForeignTables';
 export interface IFilmFromApi{
  title:          string
  episode_id:     number
  opening_crawl:  string
  director:       string
  producer:       string
  release_date:   string
  characters:     string[]
  planets:        string[]
  starships:      string[]
  vehicles:       string[]
  species:        string[]
  created:        string
  edited:         string
  url:            string
}

export namespace FilmFields {
  export type id = string;
  export type title = string | null;
  export type episode_id = number | null;
  export type opening_crawl = string | null;
  export type director = string | null;
  export type producer = string | null;
  export type release_date = string | null;
  export type created = string | null;
  export type edited = string | null;
  export type url = string | null;
  
}


export enum FilmFieldsNames{
  Id = 'id',
  Title = 'title',
  EpisodeId =  'episode_id',
  OpeningCrawl = 'opening_crawl',
  Director = 'director',
  Producer =  'producer',
  ReleaseDate =  'release_date',
  Created = 'created',
  Edited = 'edited',
  Url = 'url'
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


