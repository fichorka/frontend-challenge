import React, {useContext} from 'react'
import {StoreContext, getPokemon} from '../Store'
import PokemonImage from './PokemonImage'
import PokedexStat from './PokedexStat'

export default function PokedexDetails() {
  const state = useContext(StoreContext)[0]
  const selectedPokemon = getPokemon(state, state.selected) || {}
  const {
    id,
    name,
    stats = {hp: 0, speed: 0, attack: 0, defense: 0}
  } = selectedPokemon
  return (
    <div className="pokedex__details">
      <div className="profile">
        <PokemonImage pokemon={selectedPokemon} modifier="details" />
        <span className="bio">
          {selectedPokemon.id && selectedPokemon.id !== 0 && (
            <>
              <span className="bio__id">#{id} </span>
              <span className="bio__name">{name.toUpperCase()}</span>
            </>
          )}
        </span>
      </div>
      <div className="stats">
        <PokedexStat label="HP" value={stats.hp} />
        <PokedexStat label="SPEED" value={stats.speed} />
        <PokedexStat label="ATTACK" value={stats.attack} />
        <PokedexStat label="DEFENSE" value={stats.defense} />
      </div>
    </div>
  )
}
