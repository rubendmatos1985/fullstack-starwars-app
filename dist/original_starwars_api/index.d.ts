import { IPeopleFromApi } from '../types/interfaces/People';
import { IFilmFromApi } from '../types/interfaces/Film';
import { IPlanetFromApi } from '../types/interfaces/Planet';
import { IStarshipFromApi } from '../types/interfaces/Starship';
import { IVehicleFromApi } from '../types/interfaces/Vehicle';
import { ISpecieFromApi } from '../types/interfaces/Specie';
interface IApi {
    People: () => Promise<IPeopleFromApi[]>;
    Film: () => Promise<IFilmFromApi[]>;
    Planet: () => Promise<IPlanetFromApi[]>;
    Starship: () => Promise<IStarshipFromApi[]>;
    Vehicle: () => Promise<IVehicleFromApi[]>;
    Specie: () => Promise<ISpecieFromApi[]>;
}
declare const Api: IApi;
export default Api;
