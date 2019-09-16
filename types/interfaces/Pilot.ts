export interface Pilot{
    id: PilotFieldTypes.id;
    vehicle_id: PilotFieldTypes.vehicle_id;
    people_id: PilotFieldTypes.people_id
}

export enum PilotFieldNames{
    Id = 'id',
    VehicleId = 'vehicle_id',
    PeopleId = 'people_id'
}


export namespace PilotFieldTypes{
    export type id = string;
    export type vehicle_id = string;
    export type people_id = string;
}