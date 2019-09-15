import { EntityTable } from "./Tables";

export namespace PilotFields {
    export type id = string | null;
    export type vehicle_id = string | null;
    export type people_id = string | null;

}

export interface Pilot {
    id: PilotFields.id;
    vehicle_id: PilotFields.vehicle_id;
    people_id: PilotFields.people_id;

}
export namespace PlanetFields {
    export type id = string;
    export type name = string | null;
    export type rotation_period = string | null;
    export type orbital_period = string | null;
    export type diameter = string | null;
    export type climate = string | null;
    export type gravity = string | null;
    export type terrain = string | null;
    export type surface_water = string | null;
    export type population = string | null;
    export type url = string | null;

}

export interface Planet{
    id: PlanetFields.id;
    name: PlanetFields.name;
    rotation_period: PlanetFields.rotation_period;
    orbital_period: PlanetFields.orbital_period;
    diameter: PlanetFields.diameter;
    climate: PlanetFields.climate;
    gravity: PlanetFields.gravity;
    terrain: PlanetFields.terrain;
    surface_water: PlanetFields.surface_water;
    population: PlanetFields.population;
    url: PlanetFields.url;

}

export namespace ActorsFields {
    export type id = string | null;
    export type people_id = string | null;
    export type film_id = string | null;

}

export interface Actors {
    id: ActorsFields.id;
    people_id: ActorsFields.people_id;
    film_id: ActorsFields.film_id;

}

export namespace VehicleFields {
    export type id = string;
    export type name = string | null;
    export type model = string | null;
    export type manufacturer = string | null;
    export type cost_in_credits = string | null;
    export type length = string | null;
    export type max_atmosphering_speed = string | null;
    export type crew = string | null;
    export type passengers = string | null;
    export type cargo_capacity = string | null;
    export type consumables = string | null;
    export type vehicle_class = string | null;
    export type url = string | null;

}

export interface Vehicle {
    id: VehicleFields.id;
    name: VehicleFields.name;
    model: VehicleFields.model;
    manufacturer: VehicleFields.manufacturer;
    cost_in_credits: VehicleFields.cost_in_credits;
    length: VehicleFields.length;
    max_atmosphering_speed: VehicleFields.max_atmosphering_speed;
    crew: VehicleFields.crew;
    passengers: VehicleFields.passengers;
    cargo_capacity: VehicleFields.cargo_capacity;
    consumables: VehicleFields.consumables;
    vehicle_class: VehicleFields.vehicle_class;
    url: VehicleFields.url;

}

export namespace FilmFields {
    export type id = string;
    export type title = string | null;
    export type episode_id = number | null;
    export type opening_crawl = string | null;
    export type director = string | null;
    export type producer = string | null;
    export type release_date = string | null;
    export type created = string | null;
    export type edited = string | null;
    export type url = string | null;
    
}



export interface Film {
    id: FilmFields.id;
    title: FilmFields.title;
    episode_id: FilmFields.episode_id;
    opening_crawl: FilmFields.opening_crawl;
    director: FilmFields.director;
    producer: FilmFields.producer;
    release_date: FilmFields.release_date;
    created: FilmFields.created;
    edited: FilmFields.edited;
    url: FilmFields.url;

}

export namespace CharacterFields {
    export type id = string | null;
    export type people_id = string | null;
    export type film_id = string | null;

}

export interface Character {
    id: CharacterFields.id;
    people_id: CharacterFields.people_id;
    film_id: CharacterFields.film_id;

}

export namespace VehiclesInFilmsFields {
    export type id = string | null;
    export type vehicle_id = string | null;
    export type film_id = string | null;

}

export interface VehiclesInFilms {
    id: VehiclesInFilmsFields.id;
    vehicle_id: VehiclesInFilmsFields.vehicle_id;
    film_id: VehiclesInFilmsFields.film_id;

}

export namespace SpecieFields {
    export type id = string;
    export type name = string | null;
    export type classification = string | null;
    export type designation = string | null;
    export type average_height = string | null;
    export type skin_colors = string | null;
    export type hair_colors = string | null;
    export type eye_colors = string | null;
    export type average_lifespan = string | null;
    export type language = string | null;
    export type url = string | null;
    export type homeworld = string | null;

}

export interface Specie {
    id: SpecieFields.id;
    name: SpecieFields.name;
    classification: SpecieFields.classification;
    designation: SpecieFields.designation;
    average_height: SpecieFields.average_height;
    skin_colors: SpecieFields.skin_colors;
    hair_colors: SpecieFields.hair_colors;
    eye_colors: SpecieFields.eye_colors;
    average_lifespan: SpecieFields.average_lifespan;
    language: SpecieFields.language;
    url: SpecieFields.url;
    homeworld: SpecieFields.homeworld;

}

export namespace StarshipFields {
    export type id = string | null;
    export type name = string | null;
    export type model = string | null;
    export type manufacturer = string | null;
    export type cost_in_credits = string | null;
    export type length = string | null;
    export type max_atmosphering_speed = string | null;
    export type crew = string | null;
    export type passengers = string | null;
    export type cargo_capacity = string | null;
    export type consumables = string | null;
    export type hyperdrive_rating = string | null;
    export type MGLT = string | null;
    export type starship_class = string | null;
    export type url = string | null;
    export type created = string | null;
    export type edited = string | null;

}

export interface Starship {
    id: StarshipFields.id;
    name: StarshipFields.name;
    model: StarshipFields.model;
    manufacturer: StarshipFields.manufacturer;
    cost_in_credits: StarshipFields.cost_in_credits;
    length: StarshipFields.length;
    max_atmosphering_speed: StarshipFields.max_atmosphering_speed;
    crew: StarshipFields.crew;
    passengers: StarshipFields.passengers;
    cargo_capacity: StarshipFields.cargo_capacity;
    consumables: StarshipFields.consumables;
    hyperdrive_rating: StarshipFields.hyperdrive_rating;
    MGLT: StarshipFields.MGLT;
    starship_class: StarshipFields.starship_class;
    url: StarshipFields.url;
    created: StarshipFields.created;
    edited: StarshipFields.edited;

}

export namespace PeopleFields {
    export type id = string;
    export type name = string | null;
    export type height = string | null;
    export type mass = string | null;
    export type hair_color = string | null;
    export type skin_color = string | null;
    export type eye_color = string | null;
    export type birth_year = string | null;
    export type gender = string | null;
    export type created = string | null;
    export type edited = string | null;
    export type url = string | null;
    export type specie_id = string | null;

}

export interface People {
    id: PeopleFields.id;
    name: PeopleFields.name;
    height: PeopleFields.height;
    mass: PeopleFields.mass;
    hair_color: PeopleFields.hair_color;
    skin_color: PeopleFields.skin_color;
    eye_color: PeopleFields.eye_color;
    birth_year: PeopleFields.birth_year;
    gender: PeopleFields.gender;
    created: PeopleFields.created;
    edited: PeopleFields.edited;
    url: PeopleFields.url;
    specie_id: PeopleFields.specie_id;

}

export namespace StarshipsInFilmsFields {
    export type id = string | null;
    export type starship_id = string | null;
    export type film_id = string | null;

}

export interface StarshipsInFilms {
    id: StarshipsInFilmsFields.id;
    starship_id: StarshipsInFilmsFields.starship_id;
    film_id: StarshipsInFilmsFields.film_id;

}

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

export namespace SpeciesInFilmsFields {
  export type id = string | null;
  export type specie_id = string | null;
  export type film_id = string | null;

}

export interface SpeciesInFilms {
  id: SpeciesInFilmsFields.id;
  specie_id: SpeciesInFilmsFields.specie_id;
  film_id: SpeciesInFilmsFields.film_id;

}

export namespace ResidentFields{
    export type id = string;
    export type planet_id = string;
    export type people_id = string;
}

export interface Resident{
    id: ResidentFields.id;
    people_id: ResidentFields.people_id;
    planet_id: ResidentFields.planet_id;
}


export interface IJsonBuildObject{
  json_build_object: any
}

export interface IPostgresJsonBuildObject{
    command: string;
    rowCount: number;
    oid: any;
    rows: IJsonBuildObject[]
}