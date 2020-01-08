import fetchData from '../utils/fetchData';
import { IPeopleFromApi } from '../models/People';
import { IFilmFromApi } from '../models/Film';
import { IPlanetFromApi } from '../models/Planet';
import { IApiResponse } from './responseInterface';
import { asyncMemoize as Mem } from '../utils/memoize';
import { ExecException } from 'child_process';
import { IStarshipFromApi } from '../types/interfaces/Starship';
import { IVehicleFromApi } from '../types/interfaces/Vehicle';
import { ISpecieFromApi } from '../models/Specie';
interface IApi {
  People: () => Promise<IPeopleFromApi[]>;
  Film: () => Promise<IFilmFromApi[]>;
  Planet: () => Promise<IPlanetFromApi[]>;
  Starship: () => Promise<IStarshipFromApi[]>;
  Vehicle: ()=> Promise<IVehicleFromApi[]>
  Specie: ()=> Promise<ISpecieFromApi[]>
}
const Api: IApi = {
  
  People: Mem(
    async (url: string) =>
      await Promise.all(
        Array(9)
          .fill(0)
          .map((_: number, i: number) => fetchData(`${url}${i + 1}`))
      )
        .then((response: any) =>
          response.reduce((acc: any, obj: IApiResponse) => [...acc, ...obj.results] as IPeopleFromApi[], [])
        )
        .catch((e: ExecException) => ({ message: 'error' }))
  )('https://swapi.co/api/people/?page='),

  Film: Mem(
    async (url: string) =>
      await fetchData(url)
        .then((response: any) => response.results)
        .catch((e: ExecException) => ({ message: 'error' }))
  )('https://swapi.co/api/films/'),
  
  Planet: Mem(
    async (url: string) =>
      await Promise.all(
        Array(6)
          .fill(0)
          .map((_, i) => fetchData(`${url}${i + 1}`))
      )
        .then((v) => v.reduce((acc: any, obj: any) => [...acc, ...(obj.results as any)], []))
        .catch((e: ExecException) => ({ message: 'error' }))
  )('https://swapi.co/api/planets/?page='),
  
  Starship: Mem(
    async (url: string) =>
      await Promise.all(
        Array(4)
          .fill(0)
          .map((_, i) => fetchData(`${url}${i + 1}`))
      )
        .then((v) => v.reduce((acc: any, obj: any) => [...acc, ...(obj.results as any[])], []))
        .catch((e: ExecException) => ({ message: 'error' }))
  )('https://swapi.co/api/starships/?page='),
  
  Vehicle: Mem(
    async (url: string) =>
      await Promise.all(
        Array(4)
          .fill(0)
          .map((_, i) => fetchData(`${url}${i + 1}`))
      )
        .then((v) => v.reduce((acc: any, obj: any) => [...acc, ...(obj.results as any[])], []))
        .catch((e: ExecException) => ({ message: 'error' }))
  )('https://swapi.co/api/vehicles/?page='),

  Specie: Mem(
   async (url:string)=>
    await Promise.all(
      Array(4)
        .fill(0)
        .map((_, i) => fetchData(`${url}${i + 1}`))
    )
      .then((v) => v.reduce((acc: any, obj: any) => [...acc, ...(obj.results as any[])], []))
      .catch((e: ExecException) => ({ message: 'error' }))
  )('https://swapi.co/api/species/?page=')
  
};
export default Api;
