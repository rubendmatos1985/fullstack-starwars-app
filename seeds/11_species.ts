import * as Knex from "knex";
import mapData from "../utils/mapData";
import { ISpecieFromApi, ISpecieEntity, ISpecieEntityFields } from "../types/interfaces/Specie";
import Api from "../api";
import { Table } from "../types/Tables";

export async function seed(knex: Knex): Promise<any> {
  const data:ISpecieEntity[] = await mapData<ISpecieFromApi, ISpecieEntity>(
    Api.Specie, 
    Object.keys(ISpecieEntityFields).map(key => ISpecieEntityFields[key as any]).filter(v => v != ISpecieEntityFields.Homeworld)
    )
    
    return knex(Table.Specie).del()
        .then(() => {
           return knex(Table.Specie).insert(data);
        });
};
