export interface Pilot {
    id: PilotFieldTypes.id;
    vehicle_id: PilotFieldTypes.vehicle_id;
    people_id: PilotFieldTypes.people_id;
}
export declare enum PilotFieldNames {
    Id = "id",
    VehicleId = "vehicle_id",
    PeopleId = "people_id"
}
export declare namespace PilotFieldTypes {
    type id = string;
    type vehicle_id = string;
    type people_id = string;
}
