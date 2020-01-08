import { IStarshipEntity } from "../Starship";
import { IFromForeignTables } from "./FromForeignTables";

export interface IStarshipViewModel extends IStarshipEntity{
    pilots: IFromForeignTables[],
    films: IFromForeignTables[]
}