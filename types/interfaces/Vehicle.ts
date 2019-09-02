import { ISubjectFromApi } from "./Subject";
import { ITransportFromApi } from "./Transport";

export interface IVehicleFromApi extends ISubjectFromApi, ITransportFromApi{
  vehicle_class: string
}