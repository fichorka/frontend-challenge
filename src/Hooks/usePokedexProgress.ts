import {useEffect, Dispatch} from 'react'
import {getGuessedPokemons} from '../Store/selectors'
import {State} from '../TypeDeclarations'
import {pokedexIsCompleted, continueGame} from '../Store/actions'

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
      dispatch(pokedexIsCompleted())
    } else dispatch(continueGame())
  }, [state.shouldCheckCompletion])
}
