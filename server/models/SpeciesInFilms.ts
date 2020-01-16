export interface ISpeciesInFilms{
    id: string;
    film_id: string;
    specie_id: string;
}

export namespace SpeciesInFilmsFieldsType{
    export type id = string;
    export type film_id = string;
    export type specie_id = string;
}

export enum SpeciesInFilmsFieldsName{
    Id = 'id',
    FilmId = 'film_id',
    SpecieId = 'specie_id'    
}