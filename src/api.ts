import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import {
  PokemonQueryArg,
  PokemonResponse,
  PokemonsQueryArg,
  PokemonsResponse,
} from './types.ts'

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://pokeapi.co/api/v2/',
  }),
  endpoints: (build) => ({
    pokemons: build.query<PokemonsResponse, PokemonsQueryArg>({
      query: ({ offset = 0, limit = 9 }) => ({
        url: 'pokemon',
        params: {
          offset,
          limit,
        },
      }),
    }),
    pokemon: build.query<PokemonResponse, PokemonQueryArg>({
      query: ({ idOrName }) => `pokemon/${idOrName}`,
    }),
  }),
})

export default api
