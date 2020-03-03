import React, {useContext} from 'react'
import PokemonImage from './PokemonImage'
import {StoreContext, getFullPokemonList} from '../Store'
import {selectPokemon} from '../Store/actions'
import {StoreT} from '../TypeDeclarations'

export default function PokedexList() {
  const [state, dispatch]: StoreT = useContext(StoreContext)

  function handlePokemonClick(id) {
    const p = selectPokemon(id)
    if (p) dispatch(selectPokemon(id))
  }

  const fullPokemonList = getFullPokemonList(state)

  return (
    <div className={'pokedex__list'}>
      {fullPokemonList.map(p => (
        <PokemonImage
          pokemon={p}
          key={p.id + p.name}
          handleClick={handlePokemonClick}
          modifier="list"
        />
      ))}
    </div>
  )
}
