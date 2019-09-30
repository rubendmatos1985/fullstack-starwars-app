export enum Table{
  Actors = 'actors',
  Film = 'film',
  People = 'people',
  Pilot = 'pilot',
  Planet = 'planet',
  PlanetsInFilms = 'planets_in_films',
  Specie = 'specie',
  Starship = 'starship',
  Vehicle = 'vehicle',
  VehiclesInFilms = 'vehicles_in_films',
  StarshipsInFilms = 'starships_in_films',
  SpeciesInFilms = 'species_in_films',
  Race = 'race',
  StarshipPilot = 'starship_pilot',
 

}

export enum ManyToManyTable{
  Actors = 'actors',
  VehiclesInFilms = 'vehicles_in_films',
  StarshipsInFilms = 'starships_in_films',
  SpeciesInFilms = 'species_in_films',
  PlanetsInFilms = 'planets_in_films',
  Resident = 'resident',
  Pilot = 'pilot',
  StarshipPilot = 'starship_pilot',
  UserPermissions = 'user_permissions'
}

export enum OneToManyTable{
  Race = 'race',
}

export enum EntityTable{
  Film = 'film',
  People = 'people',
  Planet = 'planet',
  Specie = 'specie',
  Starship = 'starship',
  Vehicle = 'vehicle',
  Test    = 'test',
  User = 'user',
  Permission = 'permission'
}