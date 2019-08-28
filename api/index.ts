import fetchData from "../utils/fetchData";
import { IPeopleFromApi } from "../interfaces/People";
import { IFilmFromApi } from "../interfaces/Film";
import { IPlanetFromApi } from '../interfaces/Planet';
import { IApiResponse } from "./responseInterface";
interface IApi{
  People: ()=> Promise<IPeopleFromApi[]>
  Film: ()=> Promise<IFilmFromApi[]>
  Planet: ()=> Promise<IPlanetFromApi[]>
}
const Api:(()=> IApi) = ()=> ({
    People:  async () =>
      await Promise.all(
        Array(9)
          .fill(0)
          .map(
            (_:number, i:number) =>
              fetchData(`https://swapi.co/api/people/?page=${i+1}`) as Promise<IApiResponse>
          )
        )
        .then((response: IApiResponse[]) =>
          response.reduce(
            (acc: any, obj: IApiResponse) =>
              [...acc, ...obj.results] as IPeopleFromApi[],
            []
          )
        ),
  
    Film: async () =>(
      await fetchData("https://swapi.co/api/films/")
        .then(
          (response: IApiResponse) => response.results
        )
    ),
    Planet: async ()=>(
      await Promise.all(
        Array(7).fill(0)
        .map((_, i)=> fetchData(`https://swapi.co/api/planets/?page=${i+1}`) as IApiResponse)
      )
      .then(v => v.reduce((acc:any, obj: IApiResponse)=> [...acc, ...obj.results] as IPlanetFromApi[],[]))
        
    )
  })  
export default Api();
