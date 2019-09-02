export interface ITransportEntity{
  model: string
  manufacturer: string
  cost_in_credits: string
  length: string
  max_atmosphering_speed: string
  crew: string
  passengers: string
  cargo_capacity: string
  consumables: string
}

export interface ITransportFromApi extends ITransportEntity{
  pilots: string[],
  films: string[]
}