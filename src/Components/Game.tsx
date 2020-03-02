import React, {useContext} from 'react'
import StoreContext from '../Store/StoreContext'
import {getPokemon} from '../Store'
import usePokemonFetch from '../Hooks/usePokemonFetch'
import PokemonImage from './PokemonImage'
import GameControls from './GameControls'

export default function Game() {
  const [state, dispatch] = useContext(StoreContext)

  const pokemon = getPokemon(state, state.guessTarget)
  return (
    <div className="game">
      <h1 className="title">GUESS THAT POKEMON!</h1>
      <PokemonImage pokemon={pokemon} isGuessing={true} modifier="game" />
      <GameControls />
    </div>
  )
}
