import React, {useContext} from 'react'
import StoreContext from '../Store/StoreContext'
import {getPokemon} from '../Store'
import PokemonImage from './PokemonImage'
import GameControls from './GameControls'
import ProgressBar from './ProgressBar'

export default function Game() {
  const state = useContext(StoreContext)[0]

  const pokemon = getPokemon(state, state.guessTarget) || {}
  return (
    <div className="game">
      <h1 className="title">GUESS THAT POKEMON!</h1>
      <PokemonImage pokemon={pokemon} isGuessing={true} modifier="game" />
      <GameControls />
      <ProgressBar />
    </div>
  )
}
