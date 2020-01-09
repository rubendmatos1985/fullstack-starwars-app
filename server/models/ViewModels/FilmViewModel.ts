import { IFromForeignTables } from "./FromForeignTables";
import { Film } from "../Film";

export interface IFilmViewModel extends Film{
    characters:    IFromForeignTables[],
    planets:       IFromForeignTables[],
    starships:     IFromForeignTables[],
    vehicles:      IFromForeignTables[]
  }