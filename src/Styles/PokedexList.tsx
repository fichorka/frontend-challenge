import React, {useContext} from 'react'
import PokemonImage from '../Components/PokemonImage'
import {StoreContext, getPokemon} from '../Store'
import {selectPokemon} from '../Store/actions'

export default function PokedexList() {
  const [state, dispatch] = useContext(StoreContext)
  function handlePokemonClick(id) {
    dispatch(selectPokemon(id))
  }
  const {totalPokemon} = state
  const pokedex = []
  for (let i = 1; i < totalPokemon + 1; i++) {
    const p = getPokemon(state, i)
    const pok = p && p.isGuessed ? p : {id: i, name: 'unknown'}
    pokedex.push(pok)
  }
  return (
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
  )
}
