import {useEffect} from 'react'
import {getGuessedPokemons} from '../Store/selectors'
import {State, DispatchT} from '../TypeDeclarations'
import {pokedexIsCompleted, continueGame} from '../Store/actions'

export default function usePokedexProgress(state: State, dispatch: DispatchT) {
  // custom hook for controlling game flow
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
