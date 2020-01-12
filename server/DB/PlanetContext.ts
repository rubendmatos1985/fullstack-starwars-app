import { knex, IDBContext } from ".";
import { IPlanetViewModel } from "../models/ViewModels/PlanetViewModel";

export const PlanetContext: IDBContext<IPlanetViewModel> = {
  Get: (field?: string) =>
    function(value?: string): Promise<IPlanetViewModel[]> {
      const k =
        field && value
          ? field === "name"
            ? knex.where(field, "like", `%${value}%`)
            : knex.where(field, value)
          : knex;
      return k
        .select(
          "planet.*",
          "residents.json_agg as residents",
          "films.json_agg as films"
        )
        .from(function() {
          this.select(
            "planet.id as planet_id",
            knex.raw("json_agg(people.name)")
          )
            .from("planet")
            .leftJoin("resident", "resident.planet_id", "planet.id")
            .leftJoin("people", "people.id", "resident.people_id")
            .groupBy("planet.id")
            .as("residents");
        })
        .join(
          function() {
            this.select(
              "planet.id as planet_id",
              knex.raw("json_agg(film.title)")
            )
              .from("planet")
              .leftJoin(
                "planets_in_films",
                "planets_in_films.planet_id",
                "planet.id"
              )
              .leftJoin("film", "planets_in_films.film_id", "film.id")
              .groupBy("planet.id")
              .as("films");
          },
          "residents.planet_id",
          "films.planet_id"
        )
        .join("planet", "planet.id", "residents.planet_id");
    }
  
};
