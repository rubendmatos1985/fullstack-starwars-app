import fetchData from '../utils/fetchData';
import { IPeopleFromApi } from '../interfaces/People';
import { IFilmFromApi } from '../interfaces/Film';
import { IPlanetFromApi } from '../interfaces/Planet';
import { IApiResponse } from './responseInterface';
import { asyncMemoize as Mem } from '../utils/memoize';
interface IApi{
  People: ()=> IPeopleFromApi[];
  Film: ()=> IFilmFromApi[];
  Planet: ()=> IPlanetFromApi[];
  Starship: Function;
}
const Api: IApi = {
  People: Mem(
    async (url: string) =>
      await Promise.all(
        Array(9)
          .fill(0)
          .map((_: number, i: number) => fetchData(url + i + 1))
      ).then((response: IApiResponse[]) =>
        response.reduce((acc: any, obj: IApiResponse) => [...acc, ...obj.results] as IPeopleFromApi[], [])
      )
  )('https://swapi.co/api/people/?page='),

  Film: Mem(async (url: string) => await fetchData(url).then((response:any) => response.results))(
    'https://swapi.co/api/films/'
  ),

  Planet: Mem(
    async (url: string) =>
      await Promise.all(
        Array(7)
          .fill(0)
          .map((_, i) => fetchData(url + i + 1))
      ).then((v) => v.reduce((acc: any, obj: IApiResponse) => [...acc, ...obj.results] as IPlanetFromApi[], []))
  )('https://swapi.co/api/planets/?page='),

  Starship: Mem(
    async (url: string) =>
      await Promise.all(
        Array(4)
          .fill(0)
          .map((_, i) => fetchData(url + i + 1))
      ).then((v) => v.reduce((acc: any, obj: IApiResponse) => [...acc, ...obj.results] as IPlanetFromApi[], []))
  )('https://swapi.co/api/starships/?page=')
};
export default Api;
