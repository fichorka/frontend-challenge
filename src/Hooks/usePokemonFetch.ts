import {useEffect} from 'react'
import {
  addPokemon,
  setGuessTarget,
  setIsCurPokemonGuessed,
  setIsDataComplete
} from '../Store/actions'
import {fetchPokemon} from '../API/fetchPokemon'
import {randomPokemonId} from './Utils'
import {selectPokemon} from '../Store/selectors'

// controls
export default function(state, dispatch) {
  useEffect(() => {
    if (state.isCurPokemonGuessed && !state.isPokedexComplete) {
      const id = randomPokemonId(state)
      if (!selectPokemon(state, id)) {
        // if pokemon isn't found, fetch it:
        fetchPokemon(id).then(res => {
          dispatch(addPokemon(res))
          dispatch(setIsCurPokemonGuessed(false))
          dispatch(setGuessTarget(res.id))
          if (state.data.length >= 151) dispatch(setIsDataComplete(true))
        })
      } else {
        // else, just change guessTarget
        dispatch(setIsCurPokemonGuessed(false))
        dispatch(setGuessTarget(id))
      }
    }
  }, [state.isCurPokemonGuessed])
}
