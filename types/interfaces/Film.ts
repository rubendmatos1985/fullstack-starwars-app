import {IFromForeignTables} from './FromForeignTables';
import { Film, FilmFields } from '../DB';
export interface IFilmClass{
  getById: (id: string)=> ()=> Promise<any>
  getAll: ()=> Promise<any>
  insert: (object:IFilmResponse[])=> any
}
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



export interface IFilmResponse extends Film{
  characters:    IFromForeignTables[],
  planets:       IFromForeignTables[],
  starships:     IFromForeignTables[],
  vehicles:      IFromForeignTables[]
}

