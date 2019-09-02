import * as Knex from 'knex';
import Api from '../api';
import { ISpecieFromApi, ISpecieEntityFields, ISpecieEntity } from '../types/interfaces/Specie';
import { Table } from '../types/Tables';
import uuid from 'uuid/v1';
export async function seed(knex: Knex): Promise<any> {
  
   const data: {
    specie: string;
    homeworld: string;
  }[] = await makeRelation(knex).then((obj: any[]) =>
    obj.map((v: any) => ({
      specie: v.specie.reduce((acc: any, v: any) => v.id, ''),
      homeworld: v.homeworld.reduce((acc: any, v: any) => v.id, '')
    }))
  );
  const t:ISpecieEntity[] = await knex(Table.Specie).select('*');
  return knex(Table.Specie)
    .del()
    .then(() => {
      return knex(Table.Specie).insert(
        t.map(
          (s:ISpecieEntity, i:number)=>({
            ...s,
            homeworld: data[i].homeworld ? data[i].homeworld : null
          })
        )
      );
    });
}

const makeRelation = async (knex: Knex) => {
  const fromApi: ISpecieFromApi[] = await Api.Specie();
  const grouped: Promise<{ specie: any; homeworld: any }>[] = fromApi.map(async (obj: ISpecieFromApi) => ({
    specie: await knex
      .select('id')
      .from(Table.Specie)
      .where('url', obj.url),
    homeworld: await knex
      .select('id')
      .from(Table.Planet)
      .where('url', obj.homeworld)
  }));
  return Promise.all(grouped);
};