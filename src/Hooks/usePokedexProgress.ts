import {useEffect, Dispatch} from 'react'
import {getGuessedPokemons} from '../Store/selectors'
import {State} from '../TypeDeclarations'
import {pokedexIsCompleted} from '../Store/actions'

export default function useGameControl(
  state: State,
  dispatch: Dispatch<{[key: string]: any}>
) {
  // custom hook for syncing isPokedexComplete property with global state
  useEffect(() => {
    if (
      state.data.length >= state.totalPokemon &&
      getGuessedPokemons(state).length >= state.totalPokemon
    ) {
      dispatch(pokedexIsCompleted())
    }
  }, [getGuessedPokemons(state).length])
}
