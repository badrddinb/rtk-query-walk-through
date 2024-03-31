export interface NamedAPIResource {
  name: string
  url: string
}

export interface PokemonsQueryArg {
  offset?: number
  limit?: number
}

export interface PokemonsResponse {
  count: number
  next?: string
  previous?: string
  results: NamedAPIResource[]
}

export interface PokemonQueryArg {
  idOrName: number | string
}

export interface PokemonSprites {
  front_default: string
  front_shiny: string
  front_female: string
  front_shiny_female: string
  back_default: string
  back_shiny: string
  back_female: string
  back_shiny_female: string
}

export interface PokemonType {
  slot: number
  type: NamedAPIResource
}

export interface PokemonResponse {
  id: number
  name: string
  base_experience: number
  height: number
  is_default: boolean
  order: number
  weight: number
  sprites: PokemonSprites
  types: PokemonType[]
}
