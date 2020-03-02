import {useEffect, Dispatch} from 'react'
import {getGuessedPokemons, getPokemon} from '../Store/selectors'
import {State} from '../TypeDeclarations'
import {
  pokedexIsCompleted,
  storePokemon,
  newGuessTarget,
  continueGame
} from '../Store/actions'
import {randomPokemonId} from './Utils'
import {fetchPokemon} from '../API/fetchPokemon'

export default function usePokedexProgress(
  state: State,
  dispatch: Dispatch<{[key: string]: any}>
) {
  // custom hook for syncing isPokedexComplete property with global state
  console.log(state)
  useEffect(() => {
    if (
      state.shouldCheckCompletion &&
      state.data.length >= state.totalPokemon &&
      getGuessedPokemons(state).length >= state.totalPokemon
    ) {
      state.isPokedexComplete
      dispatch(pokedexIsCompleted())
      state.isPokedexComplete
    } else dispatch(continueGame())
  }, [state.shouldCheckCompletion])
}
