import { Dispatch, SetStateAction, useCallback, useState } from 'react'
import api from './api.ts'

const Pokemons = ({
  setPokemon,
}: {
  setPokemon: Dispatch<SetStateAction<string | undefined>>
}) => {
  const { isUninitialized, isLoading, isError, data, error } =
    api.usePokemonsQuery({})

  if (isUninitialized) return null
  if (isLoading) return <p>loading, please wait</p>
  if (isError) {
    console.error(error)
    return <p>something went wrong</p>
  }
  return (
    <article>
      <h2>Overview</h2>
      <ol start={1}>
        {data.results.map((pokemon) => (
          <li key={pokemon.name}>
            <button onClick={() => setPokemon(pokemon.name)}>
              {pokemon.name}
            </button>
          </li>
        ))}
      </ol>
    </article>
  )
}

const Pokemon = ({ pokemonName }: { pokemonName: string }) => {
  const { isUninitialized, isLoading, isError, data, error } =
    api.usePokemonQuery({ idOrName: pokemonName })

  if (isUninitialized) return null
  if (isLoading) return <p>loading, please wait</p>
  if (isError) {
    console.error(error)
    return <p>something went wrong</p>
  }
  return (
    <article>
      <h2>{data.name}</h2>
      <img src={data.sprites.front_default} alt={data.name} />
      <ul>
        <li>id: {data.id}</li>
        <li>height: {data.height}</li>
        <li>weight: {data.weight}</li>
        <li>
          types:
          {data.types.map((item) => item.type.name)}
        </li>
      </ul>
    </article>
  )
}

function App() {
  const [pokemon, setPokemon] = useState<string | undefined>()

  const handlePokemonReset = useCallback(() => {
    setPokemon(undefined)
  }, [])

  return (
    <>
      <header>
        <h1>My Pokedex</h1>
      </header>
      <main>
        {pokemon ? (
          <>
            <Pokemon pokemonName={pokemon} />
            <button onClick={handlePokemonReset}>back</button>
          </>
        ) : (
          <Pokemons setPokemon={setPokemon} />
        )}
      </main>
    </>
  )
}

export default App
