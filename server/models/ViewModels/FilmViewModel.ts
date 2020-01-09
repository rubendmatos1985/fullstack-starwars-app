import { IFromForeignTables } from "./FromForeignTables";
import { Film } from "../Film";

export interface IFilmViewModel extends Film {
  characters: IFromForeignTables[];
  planets: IFromForeignTables[];
  starships: IFromForeignTables[];
  vehicles: IFromForeignTables[];
}

export enum FilmViewModelForeignFields {
  Characters = "characters",
  Planets = "planets",
  Starships = "starships",
  Vehicles = "vehicles"
}
