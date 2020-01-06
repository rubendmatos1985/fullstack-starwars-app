import { IEntity } from "./Entity";

export interface IActors extends IEntity{
    people_id: string
    film_id: string
}

export enum IActorsFieldsNames{
    Id = 'id',
    PeopleId = 'people_id',
    FilmId =  'film_id'
}