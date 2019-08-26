import fetchData from "../utils/fetchData";
import { IPeopleFromApi } from "../models/People";
import { IFilmFromApi } from "../models/Film";
import { IApiResponse } from "./responseInterface";
class Api {
  static People: () => Promise<IPeopleFromApi[]> = async () => {
    const result: IPeopleFromApi[] = await Promise.all(
      Array(9)
        .fill(0)
        .map(
          (_, i) =>
            fetchData(`https://swapi.co/api/people/?page=${i + 1}`) as Promise<
              IApiResponse
            >
        )
    ).then((response: IApiResponse[]) =>
      response
        .reduce((acc: any, obj: IApiResponse) => [...acc, obj.results], [] as IPeopleFromApi[])
        .reduce(
          (acc: IPeopleFromApi[], o: IPeopleFromApi[]) => [...acc, ...o],
          []
        )
    );
    return await result;
  };
  static Film: () => Promise<IFilmFromApi[]> = async () =>
    await fetchData("https://swapi.co/api/films/").then(
      (response: IApiResponse) => response.results
    );
}
export default Api;
