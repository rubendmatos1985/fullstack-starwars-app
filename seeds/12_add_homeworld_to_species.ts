import * as Knex from 'knex';
import Api from '../api';
import { ISpecieFromApi } from '../types/interfaces/Specie';
import { Table } from '../types/Tables';
import uuid from 'uuid/v1';
export async function seed(knex: Knex): Promise<any> {
  const trxProvider = knex.transactionProvider();
  const trx = await trxProvider();
  /* const ids = await trx(Table.Specie).where('id','3e014c40-cd9e-11e9-929a-9f734674de5d')
    .update('homeworld', '0b023d95-cd98-11e9-b0f0-db48161b2545')
    .then(trx.commit);
 */ const data: {
    specie: string;
    homeworld: string;
  }[] = await makeRelation(knex).then((obj: any[]) =>
    obj.map((v: any) => ({
      specie: v.specie.reduce((acc: any, v: any) => v.id, ''),
      homeworld: v.homeworld.reduce((acc: any, v: any) => v.id, '')
    }))
  );
  /*data.forEach(
   async (obj: {specie: string; homeworld: string})=>{
     await knex(Table.Specie).where('id', obj.specie).update('homeworld', obj.homeworld)
     .then(v => console.log(v));
    }
  ) */
  /* return data.forEach((obj) =>
    knex(Table.Specie)
     .where('id', obj.specie) 
     .update('homeworld', obj.homeworld)
     .then(obj => console.log(obj))
      
  ); */
  
    return await data.forEach(async (obj) => {
      console.log(obj);
      return await knex(Table.Specie)
        .where('id', obj.specie)
        .update('homeworld', obj.homeworld)
        .then(console.log)        
        .catch(e => console.log("Error: " + e))
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
