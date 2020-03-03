import React, {useContext} from 'react'
import {togglePokedex} from '../Store/actions'
import {StoreContext} from '../Store'
import {DispatchT} from '../TypeDeclarations'

export default function PokedexHeader() {
  const dispatch: DispatchT = useContext(StoreContext)[1]

  function handleClick() {
    dispatch(togglePokedex())
  }

  return (
    <header className="pokedex-header">
      <span className="pokedex-header__title">My Pokedex</span>
      <span className="pokedex-header__exit-btn" onClick={handleClick}>
        x
      </span>
    </header>
  )
}
