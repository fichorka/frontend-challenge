import React, {useContext} from 'react'
import {StoreContext, getPokemon} from '../Store'
import PokemonImage from './PokemonImage'
import PokedexStat from './PokedexStat'

export default function PokedexDetails() {
  const state = useContext(StoreContext)[0]
  const selectedPokemon = getPokemon(state, state.selected) || {
    id: 0,
    name: 'unknown',
    stats: {hp: 0, speed: 0, attack: 0, defense: 0}
  }
  return (
    <div className="pokedex__details">
      <PokemonImage pokemon={selectedPokemon} modifier="details" />
      <div className="stats">
        <PokedexStat label="HP" value={selectedPokemon.stats.hp} />
        <PokedexStat label="SPEED" value={selectedPokemon.stats.speed} />
        <PokedexStat label="ATTACK" value={selectedPokemon.stats.attack} />
        <PokedexStat label="DEFENSE" value={selectedPokemon.stats.defense} />
      </div>
    </div>
  )
}
