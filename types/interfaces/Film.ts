import {IFromForeignTables} from './FromForeignTables';
export interface IFilmMethods{
  getById: (id: string)=> ()=> Promise<any>
  getAll: ()=> Promise<any>
  //create: (object:IFilmResponse)=> Promise<IFilmResponse>
}
 
export interface IFilmEntity{
  id: string
  title: string
  episode_id: number
  opening_crawl: string
  director: string
  producer: string
  release_date: string
  created: string
  edited: string
  url: string
}

export interface IFilmFromApi{
  title: string
  episode_id: number
  opening_crawl: string
  director: string
  producer: string
  release_date: string
  characters: string[]
  planets: string[]
  starships: string[]
  vehicles: string[]
  species: string[]
  created: string
  edited: string
  url: string
}


export interface IFilmResponse extends IFilmEntity{
  characters: IFromForeignTables[],
  planets: IFromForeignTables[]
}