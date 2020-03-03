import React, {useContext} from 'react'
import {togglePokedex} from '../Store/actions'
import {StoreContext} from '../Store'
import {DispatchT, StoreT} from '../TypeDeclarations'
import {getTotalGuessedPokemon} from '../Store/selectors'

export default function PokedexHeader() {
  const [state, dispatch]: StoreT = useContext(StoreContext)

  const totalGuessed = getTotalGuessedPokemon(state)

  function handleClick() {
    dispatch(togglePokedex())
  }

  return (
    <header className="pokedex-header">
      <span className="pokedex-header__title">
        My Pokedex
        <span className="pokedex-header__title__info">
          ({totalGuessed} / {state.totalPokemon})
        </span>
      </span>
      <span className="pokedex-header__exit-btn" onClick={handleClick}>
        x
      </span>
    </header>
  )
}
