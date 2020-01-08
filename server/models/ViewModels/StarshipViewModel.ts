import { IStarshipEntity } from "../Starship";
import { IFromForeignTables } from "../../types/interfaces/FromForeignTables";

export interface IStarshipViewModel extends IStarshipEntity{
    pilots: IFromForeignTables[],
    films: IFromForeignTables[]
}