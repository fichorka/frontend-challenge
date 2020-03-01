import React, {useContext} from 'react'
import GameForm from './GameForm'
import PokedexButton from './PokedexButton'
import {StoreContext, getPokemon} from '../Store'

export default function GameControls() {
  const [state] = useContext(StoreContext)
  const pokemon = getPokemon(state, state.guessTarget)
  return (
    <>
      <GameForm />
      {pokemon && (
        <span style={{display: 'block', textAlign: 'center'}}>
          {pokemon.name}
        </span>
      )}
      <PokedexButton />
    </>
  )
}
