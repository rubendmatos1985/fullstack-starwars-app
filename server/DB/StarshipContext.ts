import { IDBContext, knex } from ".";
import { IStarshipViewModel } from "../models/ViewModels/StarshipViewModel";
import { ManyToManyTable, EntityTable } from "../types/Tables";

export const StarshipContext: IDBContext<IStarshipViewModel> = {
  get: (field?: string) =>
    function(value?: string) {
      const k =
        field && value
          ? field === "name"
            ? knex.where(field, "like", `%${value}%`)
            : knex.where(field, value)
          : knex;
      return k
        .select(
          "starship.*",
          "pilots.json_agg as pilots",
          "films.json_agg as films"
        )
        .from(function() {
          this.select(
            "starship.id as starship_id",
            knex.raw("json_agg(people.name)")
          )
            .from(EntityTable.Starship)
            .leftJoin(
              ManyToManyTable.StarshipPilot,
              "starship_pilot.starship_id",
              "starship.id"
            )
            .leftJoin(
              EntityTable.People,
              "people.id",
              "starship_pilot.people_id"
            )
            .groupBy("starship.id")
            .as("pilots");
        })
        .join(
          function() {
            this.select(
              "starship.id as starship_id",
              knex.raw("json_agg(film.title)")
            )
              .from(EntityTable.Starship)
              .leftJoin(
                "starships_in_films",
                "starships_in_films.starship_id",
                "starship.id"
              )
              .leftJoin("film", "film.id", "starships_in_films.film_id")
              .groupBy("starship.id")
              .as("films");
          },
          "pilots.starship_id",
          "films.starship_id"
        )
        .join(EntityTable.Starship, "starship.id", "pilots.starship_id");
    }
};
