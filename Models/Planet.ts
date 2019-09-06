import { Planet as IPlanet, PlanetFields } from '../types/DB';
import {knex} from '../DB'
import uuid from 'uuid/v1';
import { EntityTable, Table } from '../types/Tables';
import { IPlanetResponse } from '../types/interfaces/Planet';

export class Planet {
  attributes:IPlanet;
 
  constructor(attributes:any){
    this.attributes = {...attributes, id:uuid()}
    knex(EntityTable.Planet)
      .insert(this.attributes)
    }
  public update(data:any):void{
     this.attributes = { ...this.attributes, ...data }
     this.onAttributesChange(this.attributes) 
  }  
  private onAttributesChange(newData:any):void{
    knex(Table.Planet).update(newData).where({id: this.attributes.id})
  }  
}