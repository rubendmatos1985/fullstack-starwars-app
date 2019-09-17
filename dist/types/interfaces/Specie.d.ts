import { IPlanetEntity as Planet } from './Planet';
import { ISubject, ISubjectFromApi } from './Subject';
import { IFromForeignTables } from './FromForeignTables';
export interface ISpecieEntity extends ISubject {
    classification: string;
    designation: string;
    average_height: string;
    skin_colors: string;
    hair_colors: string;
    eye_colors: string;
    average_lifespan: string;
    language: string;
    homeworld: Planet;
}
export interface ISpecieFromApi extends ISubjectFromApi {
    classification: string;
    people: string[];
    films: string[];
    designation: string;
    average_height: string;
    skin_colors: string;
    hair_colors: string;
    eye_colors: string;
    average_lifespan: string;
    language: string;
    homeworld: string;
}
export declare enum ISpecieEntityFields {
    Id = "id",
    Name = "name",
    Classification = "classification",
    Designation = "designation",
    AverageHeight = "average_height",
    SkinColors = "skin_colors",
    HairColors = "hair_colors",
    EyeColors = "eye_colors",
    AverageLifespan = "average_lifespan",
    Homeworld = "homeworld",
    Language = "language",
    Url = "url"
}
export interface ISpecieResponse extends ISpecieEntity {
    people: IFromForeignTables[];
    films: IFromForeignTables[];
}
