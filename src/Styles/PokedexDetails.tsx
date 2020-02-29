import React, {useContext} from 'react'
import {StoreContext, getPokemon} from '../Store'
import PokemonImage from '../Components/PokemonImage'

export default function PokedexDetails() {
  const [state, dispatch] = useContext(StoreContext)
  const selectedPokemon = getPokemon(state, state.selected) || {
    id: 0,
    name: 'unknown',
    stats: {hp: 0, speed: 0, attack: 0, defense: 0}
  }
  return (
    <div className="pokedex__details">
      {/* <div className="pokedex-details__image"> */}
      <PokemonImage src={selectedPokemon.imageUrl} modifier="details" />
      {/* </div> */}
      <div className="stats">
        <div className="stats__stat">
          <span className="stat__label">HP:</span>
          <span className="stat__value">{selectedPokemon.stats.hp}</span>
        </div>
        <div className="stats__stat">
          <span className="stat__label">SPEED:</span>
          <span className="stat__value">{selectedPokemon.stats.speed}</span>
        </div>
        <div className="stats__stat">
          <span className="stat__label">ATTACK:</span>
          <span className="stat__value">{selectedPokemon.stats.attack}</span>
        </div>
        <div className="stats__stat">
          <span className="stat__label">DEFENSE:</span>
          <span className="stat__value">{selectedPokemon.stats.defense}</span>
        </div>
      </div>
    </div>
  )
}
