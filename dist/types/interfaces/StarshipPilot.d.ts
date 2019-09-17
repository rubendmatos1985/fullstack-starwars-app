export declare namespace StarshipPilotFields {
    type id = string;
    type starship_id = string;
    type people_id = string;
}
export interface StarshipPilot {
    id: StarshipPilotFields.id;
    starship_id: StarshipPilotFields.starship_id;
    people_id: StarshipPilotFields.people_id;
}
export declare enum StarshipPilotFieldsNames {
    Id = "id",
    StarshipId = "starship_id",
    PeopleId = "people_id"
}
