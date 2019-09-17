export declare namespace PilotFields {
    type id = string | null;
    type vehicle_id = string | null;
    type people_id = string | null;
}
export interface Pilot {
    id: PilotFields.id;
    vehicle_id: PilotFields.vehicle_id;
    people_id: PilotFields.people_id;
}
export declare namespace PlanetFields {
    type id = string;
    type name = string | null;
    type rotation_period = string | null;
    type orbital_period = string | null;
    type diameter = string | null;
    type climate = string | null;
    type gravity = string | null;
    type terrain = string | null;
    type surface_water = string | null;
    type population = string | null;
    type url = string | null;
}
export interface Planet {
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
export declare namespace ActorsFields {
    type id = string | null;
    type people_id = string | null;
    type film_id = string | null;
}
export interface Actors {
    id: ActorsFields.id;
    people_id: ActorsFields.people_id;
    film_id: ActorsFields.film_id;
}
export declare namespace VehicleFields {
    type id = string;
    type name = string | null;
    type model = string | null;
    type manufacturer = string | null;
    type cost_in_credits = string | null;
    type length = string | null;
    type max_atmosphering_speed = string | null;
    type crew = string | null;
    type passengers = string | null;
    type cargo_capacity = string | null;
    type consumables = string | null;
    type vehicle_class = string | null;
    type url = string | null;
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
export declare namespace CharacterFields {
    type id = string | null;
    type people_id = string | null;
    type film_id = string | null;
}
export interface Character {
    id: CharacterFields.id;
    people_id: CharacterFields.people_id;
    film_id: CharacterFields.film_id;
}
export declare namespace VehiclesInFilmsFields {
    type id = string | null;
    type vehicle_id = string | null;
    type film_id = string | null;
}
export interface VehiclesInFilms {
    id: VehiclesInFilmsFields.id;
    vehicle_id: VehiclesInFilmsFields.vehicle_id;
    film_id: VehiclesInFilmsFields.film_id;
}
export declare namespace SpecieFields {
    type id = string;
    type name = string | null;
    type classification = string | null;
    type designation = string | null;
    type average_height = string | null;
    type skin_colors = string | null;
    type hair_colors = string | null;
    type eye_colors = string | null;
    type average_lifespan = string | null;
    type language = string | null;
    type url = string | null;
    type homeworld = string | null;
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
export declare namespace StarshipFields {
    type id = string | null;
    type name = string | null;
    type model = string | null;
    type manufacturer = string | null;
    type cost_in_credits = string | null;
    type length = string | null;
    type max_atmosphering_speed = string | null;
    type crew = string | null;
    type passengers = string | null;
    type cargo_capacity = string | null;
    type consumables = string | null;
    type hyperdrive_rating = string | null;
    type MGLT = string | null;
    type starship_class = string | null;
    type url = string | null;
    type created = string | null;
    type edited = string | null;
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
export declare namespace PeopleFields {
    type id = string;
    type name = string | null;
    type height = string | null;
    type mass = string | null;
    type hair_color = string | null;
    type skin_color = string | null;
    type eye_color = string | null;
    type birth_year = string | null;
    type gender = string | null;
    type created = string | null;
    type edited = string | null;
    type url = string | null;
    type specie_id = string | null;
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
export declare namespace StarshipsInFilmsFields {
    type id = string | null;
    type starship_id = string | null;
    type film_id = string | null;
}
export interface StarshipsInFilms {
    id: StarshipsInFilmsFields.id;
    starship_id: StarshipsInFilmsFields.starship_id;
    film_id: StarshipsInFilmsFields.film_id;
}
export declare namespace PlanetsInFilmsFields {
    type id = string | null;
    type planet_id = string | null;
    type film_id = string | null;
}
export interface PlanetsInFilms {
    id: PlanetsInFilmsFields.id;
    planet_id: PlanetsInFilmsFields.planet_id;
    film_id: PlanetsInFilmsFields.film_id;
}
export declare namespace SpeciesInFilmsFields {
    type id = string | null;
    type specie_id = string | null;
    type film_id = string | null;
}
export interface SpeciesInFilms {
    id: SpeciesInFilmsFields.id;
    specie_id: SpeciesInFilmsFields.specie_id;
    film_id: SpeciesInFilmsFields.film_id;
}
export declare namespace ResidentFields {
    type id = string;
    type planet_id = string;
    type people_id = string;
}
export interface Resident {
    id: ResidentFields.id;
    people_id: ResidentFields.people_id;
    planet_id: ResidentFields.planet_id;
}
export interface IJsonBuildObject {
    json_build_object: any;
}
export interface IPostgresJsonBuildObject {
    command: string;
    rowCount: number;
    oid: any;
    rows: IJsonBuildObject[];
}
