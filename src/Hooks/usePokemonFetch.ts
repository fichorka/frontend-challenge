import {useEffect, Dispatch} from 'react'
import {storePokemon, newGuessTarget} from '../Store/actions'
import {fetchPokemon} from '../API/fetchPokemon'
import {randomPokemonId} from './Utils'
import {getPokemon} from '../Store/selectors'
import {State} from '../TypeDeclarations'

export default function(
  state: State,
  dispatch: Dispatch<{[key: string]: any}>
) {
  // custom hook for picking a random pokemon and fetching it (if not fetched already)
  useEffect(() => {
    if (!state.shouldCheckCompletion && state.isNextPokemonRequested) {
      const id = randomPokemonId(state)
      if (!getPokemon(state, id)) {
        // if pokemon isn't found in state, fetch it:
        fetchPokemon(id).then(res => dispatch(storePokemon(res)))
      }
      dispatch(newGuessTarget(id))
    }
  }, [state.isNextPokemonRequested])
}
