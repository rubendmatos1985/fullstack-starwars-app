import { IDBContext, knex } from ".";
import { IVehicleViewModel } from "../models/ViewModels/VehicleViewModel";

export const VehicleContext: IDBContext<IVehicleViewModel> = {
  Get: (field?: string) =>
    function(value?: string) {
      const k =
        field && value
          ? field === "name"
            ? knex.where(field, "like", `%${value}%`)
            : knex.where(field, value)
          : knex;
      return k
        .select(
          "vehicle.*",
          "pilots.json_agg as pilots",
          "films.json_agg as films"
        )
        .from(function() {
          this.select(
            "vehicle.id as vehicle_id",
            knex.raw("json_agg(people.name)")
          )
            .from("vehicle")
            .leftJoin("pilot", "pilot.vehicle_id", "vehicle.id")
            .leftJoin("people", "people.id", "pilot.people_id")
            .groupBy("vehicle.id")
            .as("pilots");
        })
        .join(
          function() {
            this.select(
              "vehicle.id as vehicle_id",
              knex.raw("json_agg(film.title)")
            )
              .from("vehicle")
              .leftJoin(
                "vehicles_in_films",
                "vehicles_in_films.vehicle_id",
                "vehicle.id"
              )
              .leftJoin("film", "film.id", "vehicles_in_films.film_id")
              .groupBy("vehicle.id")
              .as("films");
          },
          "pilots.vehicle_id",
          "films.vehicle_id"
        )
        .join("vehicle", "vehicle.id", "pilots.vehicle_id");
    }
};
