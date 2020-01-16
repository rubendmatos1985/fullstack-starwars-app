export namespace ResidentFields {
  export type id = string;
  export type planet_id = string;
  export type people_id = string;
}

export interface Resident {
  id: ResidentFields.id;
  people_id: ResidentFields.people_id;
  planet_id: ResidentFields.planet_id;
}
