import {useEffect} from 'react'
import {
  storePokemon,
  newGuessTarget,
  nextTurn,
  setIsDataComplete
} from '../Store/actions'
import {fetchPokemon} from '../API/fetchPokemon'
import {randomPokemonId} from './Utils'
import {getPokemon} from '../Store/selectors'

// controls
export default function(state, dispatch) {
  useEffect(() => {
    if (state.shouldTakeNextGuess && !state.isPokedexComplete) {
      const id = randomPokemonId(state)
      if (!getPokemon(state, id)) {
        // if pokemon isn't found, fetch it:
        fetchPokemon(id).then(res => {
          dispatch(storePokemon(res))
          if (state.data.length >= 151) dispatch(setIsDataComplete(true))
        })
      }
      dispatch(nextTurn(false))
      dispatch(newGuessTarget(id))
    }
  }, [state.shouldTakeNextGuess])
}
