import { IPlanet, IPlanetResponse } from "../types/interfaces/Planet";
import { asyncMemoize as Mem} from '../utils/memoize';
class Planet implements IPlanet{
  getById = (id: string):Promise<IPlanetResponse>=>
    Mem(
      (id:string)=>{
        
      })
}


export default Planet;