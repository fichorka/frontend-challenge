import React, {useContext} from 'react'
import {StoreContext, getPokemon} from '../Store'
import {togglePokedex, selectPokemon} from '../Store/actions'
import PokemonImage from './PokemonImage'

export default function Pokedex() {
  const [state, dispatch] = useContext(StoreContext)
  const {totalPokemon} = state
  const pokedex = []
  function handleClick() {
    dispatch(togglePokedex())
  }
  for (let i = 1; i < totalPokemon + 1; i++) {
    const p = getPokemon(state, i)
    const pok = p && p.isGuessed ? p : {id: i, name: 'unknown'}
    pokedex.push(pok)
  }
  const selectedPokemon = getPokemon(state, state.selected) || {
    id: 0,
    name: 'unknown',
    stats: {hp: 0, speed: 0, attack: 0, defense: 0}
  }

  function handlePokemonClick(id) {
    dispatch(selectPokemon(id))
  }
  return (
    <div className={'pokedex'}>
      <header className="pokedex-header">
        <span className="pokedex-header__label">My Pokedex</span>
        <span className="pokedex-header__exit-btn" onClick={handleClick}>
          x
        </span>
      </header>
      {/* extract pokedex-details into a new component */}
      <div className="pokedex-details">
        <div className="pokedex-details__image">
          <PokemonImage src={selectedPokemon.imageUrl} />
        </div>
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
      {/* extract pokedex-list into a new component */}
      <div className={'pokedex__list'}>
        {pokedex.map(p => (
          <PokemonImage
            key={p.id + p.name}
            id={p.id}
            handleClick={handlePokemonClick}
            src={p.imageUrl}
            modifier="pokedex"
          />
        ))}
      </div>
    </div>
  )
}
