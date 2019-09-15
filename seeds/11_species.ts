import * as Knex from "knex";
import mapData from "../utils/mapData";
import { ISpecieFromApi, ISpecieEntity, ISpecieEntityFields as Specie } from "../types/interfaces/Specie";
import Api from "../api";
import { Table } from "../types/Tables";

export async function seed(knex: Knex): Promise<any> {
  const data:ISpecieEntity[] = await mapData<ISpecieFromApi, ISpecieEntity>(
    Api.Specie,
    [
      Specie.Name,
      Specie.Classification,
      Specie.Designation,
      Specie.AverageHeight,
      Specie.SkinColors,
      Specie.HairColors,
      Specie.EyeColors,
      Specie.AverageLifespan,
      Specie.Language,
      Specie.Url
    ]
    )
    
    
    return knex(Table.Specie).del()
        .then(() => {
           return knex(Table.Specie).insert(data);
        });
};
