import { IDBContext, knex } from ".";
import { IStarshipViewModel } from "../models/ViewModels/StarshipViewModel";

export const StarshipContext:IDBContext<IStarshipViewModel> = 
({
    get: ()=> function(){
        return knex('')
    }
})