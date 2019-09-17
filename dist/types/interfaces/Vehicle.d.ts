import { ISubjectFromApi } from "./Subject";
import { ITransportFromApi, ITransportEntity } from "./Transport";
import { IFromForeignTables } from "./FromForeignTables";
interface Vehicle {
    vehicle_class: string;
}
export interface IVehicleFromApi extends ISubjectFromApi, ITransportFromApi {
    vehicle_class: string;
}
export interface IVehicleEntity extends Vehicle, ISubjectFromApi, ITransportEntity {
}
export interface IVehicleResponse extends IVehicleEntity {
    pilots: IFromForeignTables[];
    films: IFromForeignTables[];
}
export declare enum VehicleFieldsNames {
    Id = "id",
    Name = "name",
    Model = "model",
    Manufacturer = "manufacturer",
    CostInCredits = "cost_in_credits",
    Lenght = "length",
    MaxAtmospheringSpeed = "max_atmosphering_speed",
    Crew = "crew",
    Passengers = "passengers",
    CargoCapacity = "cargo_capacity",
    Consumables = "consumables",
    VehicleClass = "vehicle_class",
    Url = "url"
}
export interface VehicleFieldsNamesArray {
    [key: number]: VehicleFieldsNames;
}
export {};
