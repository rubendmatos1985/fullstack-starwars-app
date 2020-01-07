import { asyncMemoize as Mem } from "../utils/memoize"
import { getByIdQuery } from "../DB/getById"
import { EntityTable, ManyToManyTable, OneToManyTable } from "../types/Tables"
import { IFilmResponse, FilmFieldsNames } from "../types/interfaces/Film"
import { IActorsFieldsNames } from "../types/interfaces/Actors"
import { ISpecieEntityFields } from "../types/interfaces/Specie"
import { RaceFields } from "../types/interfaces/Races"
import { VehicleFieldsNames } from "../types/interfaces/Vehicle"
import { PilotFieldNames } from "../types/interfaces/Pilot"
import { StarshipEntityFields } from "../types/interfaces/Starship"
import { StarshipPilotFieldsNames } from "../types/interfaces/StarshipPilot"
import { getAll } from "../DB/getAll"
import { knex } from "../DB"

export default (() => {
  const _getById = (id: string) => () =>
    knex
      .where('people.id', id)
      .select(
        'people.*',
        'films.json_agg as films',
        'vehicles.json_agg as vehicles',
        'starships.json_agg as starships',
        'species.json_agg as species'
      )
      .from(
        function () {
          this
            .select('people.id as people_id', knex.raw('json_agg(film.title)'))
            .from('people')
            .leftJoin('actors', 'actors.people_id', 'people.id')
            .leftJoin('film', 'film.id', 'actors.film_id')
            .groupBy('people.id')
            .as('films')
        }

      )
      .join(
        function () {
          this
            .select('people.id as people_id', knex.raw('json_agg(vehicle.name)'))
            .from('people')
            .leftJoin('pilot', 'pilot.people_id', 'people.id')
            .leftJoin('vehicle', 'pilot.vehicle_id', 'vehicle.id')
            .groupBy('people.id')
            .as('vehicles')
        },

        'films.people_id',
        'vehicles.people_id'

      )
      .join(
        function () {
          this
            .select('people.id as people_id', knex.raw('json_agg(starship.name)'))
            .from('people')
            .leftJoin('starship_pilot', 'starship_pilot.people_id', 'people.id')
            .leftJoin('starship', 'starship_pilot.starship_id', 'starship.id')
            .groupBy('people.id')
            .as('starships')
        },
        'starships.people_id',
        'films.people_id'
      )
      .join(
        function () {
          this
            .select('people.id as people_id', knex.raw('json_agg(specie.name)'))
            .from('people')
            .leftJoin('race', 'people.id', 'race.people_id')
            .leftJoin('specie', 'specie.id', 'race.specie_id')
            .groupBy('people.id')
            .as('species')
        },
        'species.people_id',
        'films.people_id'
      )
      .join('people', 'people.id', 'films.people_id')
  return {
    getByField: (name: string) => (value: any) => ({ /*TO DO*/ }),
    getById: _getById,
    getAll: getAll(EntityTable.People, () => () => Promise.resolve()/* _getById */)
  }
})()

/*

  select people.*,
	   films.json_agg as films,
	   vehicles.json_agg as vehicles,
	   starships.json_agg as starships,
	   species.json_agg as species
 from(
	select people.id as people_id,
	   json_agg(film.title)
	   from
	   people left join actors on people.id = actors.people_id
		   	  left join film on film.id = actors.film_id
	group by people.id
)as films
join
(select people.id as people_id,
	   json_agg(vehicle.name)
	   from
	   people left join pilot on people.id = pilot.people_id
		   	  left join vehicle on vehicle.id = pilot.vehicle_id
group by people.id
)as vehicles
on films.people_id = vehicles.people_id
join (
	select people.id as people_id,
	   json_agg(starship.name)
	   from
	   people left join starship_pilot on people.id = starship_pilot.people_id
		   	  left join starship on starship.id = starship_pilot.starship_id
  group by people.id
)as starships
on starships.people_id = films.people_id
join(
	select people.id as people_id,
	json_agg(specie.name)
	from people left join race on people.id = race.people_id
				left join specie on specie.id = race.specie_id
	group by people.id
)as species
on species.people_id = films.people_id
join people on people.id = films.people_id

*/