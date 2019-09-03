export namespace pilotFields {
    export type id = string | null;
    export type vehicle_id = string | null;
    export type people_id = string | null;

}

export interface pilot {
    id: pilotFields.id;
    vehicle_id: pilotFields.vehicle_id;
    people_id: pilotFields.people_id;

}
export namespace planetFields {
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

export interface planet {
    id: planetFields.id;
    name: planetFields.name;
    rotation_period: planetFields.rotation_period;
    orbital_period: planetFields.orbital_period;
    diameter: planetFields.diameter;
    climate: planetFields.climate;
    gravity: planetFields.gravity;
    terrain: planetFields.terrain;
    surface_water: planetFields.surface_water;
    population: planetFields.population;
    url: planetFields.url;

}

export namespace actorsFields {
    export type id = string | null;
    export type people_id = string | null;
    export type film_id = string | null;

}

export interface actors {
    id: actorsFields.id;
    people_id: actorsFields.people_id;
    film_id: actorsFields.film_id;

}

export namespace vehicleFields {
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

export interface vehicle {
    id: vehicleFields.id;
    name: vehicleFields.name;
    model: vehicleFields.model;
    manufacturer: vehicleFields.manufacturer;
    cost_in_credits: vehicleFields.cost_in_credits;
    length: vehicleFields.length;
    max_atmosphering_speed: vehicleFields.max_atmosphering_speed;
    crew: vehicleFields.crew;
    passengers: vehicleFields.passengers;
    cargo_capacity: vehicleFields.cargo_capacity;
    consumables: vehicleFields.consumables;
    vehicle_class: vehicleFields.vehicle_class;
    url: vehicleFields.url;

}

export namespace filmFields {
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

export interface film {
    id: filmFields.id;
    title: filmFields.title;
    episode_id: filmFields.episode_id;
    opening_crawl: filmFields.opening_crawl;
    director: filmFields.director;
    producer: filmFields.producer;
    release_date: filmFields.release_date;
    created: filmFields.created;
    edited: filmFields.edited;
    url: filmFields.url;

}

export namespace characterFields {
    export type id = string | null;
    export type people_id = string | null;
    export type film_id = string | null;

}

export interface character {
    id: characterFields.id;
    people_id: characterFields.people_id;
    film_id: characterFields.film_id;

}

export namespace vehicles_in_filmsFields {
    export type id = string | null;
    export type vehicle_id = string | null;
    export type film_id = string | null;

}

export interface vehicles_in_films {
    id: vehicles_in_filmsFields.id;
    vehicle_id: vehicles_in_filmsFields.vehicle_id;
    film_id: vehicles_in_filmsFields.film_id;

}

export namespace specieFields {
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

export interface specie {
    id: specieFields.id;
    name: specieFields.name;
    classification: specieFields.classification;
    designation: specieFields.designation;
    average_height: specieFields.average_height;
    skin_colors: specieFields.skin_colors;
    hair_colors: specieFields.hair_colors;
    eye_colors: specieFields.eye_colors;
    average_lifespan: specieFields.average_lifespan;
    language: specieFields.language;
    url: specieFields.url;
    homeworld: specieFields.homeworld;

}

export namespace starshipFields {
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

export interface starship {
    id: starshipFields.id;
    name: starshipFields.name;
    model: starshipFields.model;
    manufacturer: starshipFields.manufacturer;
    cost_in_credits: starshipFields.cost_in_credits;
    length: starshipFields.length;
    max_atmosphering_speed: starshipFields.max_atmosphering_speed;
    crew: starshipFields.crew;
    passengers: starshipFields.passengers;
    cargo_capacity: starshipFields.cargo_capacity;
    consumables: starshipFields.consumables;
    hyperdrive_rating: starshipFields.hyperdrive_rating;
    MGLT: starshipFields.MGLT;
    starship_class: starshipFields.starship_class;
    url: starshipFields.url;
    created: starshipFields.created;
    edited: starshipFields.edited;

}

export namespace peopleFields {
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

export interface people {
    id: peopleFields.id;
    name: peopleFields.name;
    height: peopleFields.height;
    mass: peopleFields.mass;
    hair_color: peopleFields.hair_color;
    skin_color: peopleFields.skin_color;
    eye_color: peopleFields.eye_color;
    birth_year: peopleFields.birth_year;
    gender: peopleFields.gender;
    created: peopleFields.created;
    edited: peopleFields.edited;
    url: peopleFields.url;
    specie_id: peopleFields.specie_id;

}

export namespace starships_in_filmsFields {
    export type id = string | null;
    export type starship_id = string | null;
    export type film_id = string | null;

}

export interface starships_in_films {
    id: starships_in_filmsFields.id;
    starship_id: starships_in_filmsFields.starship_id;
    film_id: starships_in_filmsFields.film_id;

}

export namespace planets_in_filmsFields {
    export type id = string | null;
    export type planet_id = string | null;
    export type film_id = string | null;

}

export interface planets_in_films {
    id: planets_in_filmsFields.id;
    planet_id: planets_in_filmsFields.planet_id;
    film_id: planets_in_filmsFields.film_id;

}

export namespace knex_migrations_lockFields {
    export type index = number;
    export type is_locked = number | null;

}

export interface knex_migrations_lock {
    index: knex_migrations_lockFields.index;
    is_locked: knex_migrations_lockFields.is_locked;

}
