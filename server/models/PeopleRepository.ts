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
import { Func1, Func } from "../types/genricTypes"
import { IPeopleViewModel } from "./ViewModels/PeopleViewModel"
import { PeopleContext } from "../DB/PeopleContext"

export default (function () {
  const { get } = PeopleContext

  return {
    getByName: get('name'),
    getById: get('id'),
    getAll: get()
  }
})()