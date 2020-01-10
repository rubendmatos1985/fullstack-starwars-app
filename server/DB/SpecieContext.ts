import { IDBContext, knex } from ".";
import { ISpecieViewModel } from "../models/ViewModels/SpecieViewModel";

export const SpecieContext: IDBContext<ISpecieViewModel> = {
  Get: (field: string) =>
    function(value: string) {
      return knex
        .select(
          "specie.*",
          "in_race_people.json_agg as people",
          "films.json_agg as films"
        )
        .from(function() {
          this.select(
            "specie.id as specie_id",
            knex.raw("json_agg(people.name)")
          )
            .from("specie")
            .leftJoin("race", "race.specie_id", "specie.id")
            .leftJoin("people", "people.id", "race.people_id")
            .groupBy("specie.id")
            .as("in_race_people");
        })
        .join(
          function() {
            this.select(
              "specie.id as specie_id",
              knex.raw("json_agg(film.title)")
            )
              .from("specie")
              .leftJoin(
                "species_in_films",
                "species_in_films.specie_id",
                "specie.id"
              )
              .leftJoin("film", "film.id", "species_in_films.film_id")
              .groupBy("specie.id")
              .as("films");
          },
          "films.specie_id",
          "in_race_people.specie_id"
        )
        .join("specie", "specie.id", "in_race_people.specie_id");
    }
};
