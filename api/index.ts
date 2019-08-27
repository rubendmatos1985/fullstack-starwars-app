import fetchData from "../utils/fetchData";
import { IPeopleFromApi } from "../models/People";
import { IFilmFromApi } from "../models/Film";
import { IApiResponse } from "./responseInterface";
interface IApi{
  People: ()=> Promise<IPeopleFromApi[]>
  Film: ()=> Promise<IFilmFromApi[]>

}
const Api:(()=> IApi) = ()=> ({
  People:  async () =>
    await Promise.all(
      Array(9)
        .fill(0)
        .map(
          (_:number, i:number) =>
            fetchData(`https://swapi.co/api/people/?page=${i + 1}`) as Promise<IApiResponse>
        )
      )
      .then((response: IApiResponse[]) =>
        response.reduce(
          (acc: any, obj: IApiResponse) =>
            [...acc, ...obj.results] as IPeopleFromApi[],
          []
        )
      ),

  Film: async () =>
    await fetchData("https://swapi.co/api/films/")
      .then(
        (response: IApiResponse) => response.results
      )
})
export default Api();
