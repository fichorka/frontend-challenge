import React, {useContext} from 'react'
import {StoreContext, getPokemon} from '../Store'
import PokemonImage from './PokemonImage'
import PokedexStat from './PokedexStat'
import {State, Pokemon} from '../TypeDeclarations'

// displays selected pokemon image, id, name and stats
export default function PokedexDetails() {
  const state: State = useContext(StoreContext)[0]

  let selectedPokemon: Pokemon = getPokemon(state, state.selected) || {}
  if (!selectedPokemon.isGuessed) selectedPokemon = {}

  const {
    id,
    name,
    stats = {hp: 0, speed: 0, attack: 0, defense: 0}
  } = selectedPokemon

  return (
    <div className="pokedex__details">
      {/* id, name, and image */}
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

      {/* stats */}
      <div className="stats">
        <PokedexStat label="HP" value={stats.hp} />
        <PokedexStat label="SPEED" value={stats.speed} />
        <PokedexStat label="ATTACK" value={stats.attack} />
        <PokedexStat label="DEFENSE" value={stats.defense} />
      </div>
    </div>
  )
}
