
export namespace StarshipPilotFields{
   export type id = string;
   export type starship_id = string;
   export type people_id = string; 
}

export interface StarshipPilot{
    id: StarshipPilotFields.id;
    starship_id: StarshipPilotFields.starship_id;
    people_id: StarshipPilotFields.people_id;
}

export enum StarshipPilotFieldsNames{
    Id = 'id',
    StarshipId = 'starship_id',
    PeopleId = 'people_id'
}