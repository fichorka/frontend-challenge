import React, {useContext} from 'react'
import {StoreContext} from '../Store'
import {togglePokedex} from '../Store/actions'
import {DispatchT} from '../TypeDeclarations'

export default function PokedexButton() {
  const dispatch: DispatchT = useContext(StoreContext)[1]
  function onClick() {
    dispatch(togglePokedex())
  }
  return (
    <button
      onClick={onClick}
      type="button"
      className="button button--rounded button--fullsize"
    >
      MY POKEDEX
    </button>
  )
}
