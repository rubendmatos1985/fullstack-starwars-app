import { ISpecieEntity as Specie } from './Specie';
export interface IPeopleEntity{
  id: string
  name: string
  height: string
  mass: string
  hair_color: string
  skin_color: string
  eye_color: string
  birth_year: string
  gender: string
  created: string
  edited: string
  url: string
  species: Specie
}

export interface IPeopleFromApi{
  name: string
  height: string
  mass: string
  hair_color: string
  skin_color: string
  eye_color: string
  birth_year: string
  gender: string
  created: string
  edited: string
  url: string
  species: string
  vehicles: string[]
  starships: string[]

}