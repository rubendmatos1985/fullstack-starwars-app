export namespace PlanetsInFilmsFields {
  export type id = string | null;
  export type planet_id = string | null;
  export type film_id = string | null;
}

export interface PlanetsInFilms {
  id: PlanetsInFilmsFields.id;
  planet_id: PlanetsInFilmsFields.planet_id;
  film_id: PlanetsInFilmsFields.film_id;
}
