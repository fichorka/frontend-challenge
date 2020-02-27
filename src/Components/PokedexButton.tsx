import React, {useContext} from 'react'
import {StoreContext} from '../Store'
import {togglePokedex} from '../Store/actions'

export default function PokedexButton() {
  const [state, dispatch] = useContext(StoreContext)
  function onClick() {
    dispatch(togglePokedex())
  }
  return (
    <button onClick={onClick} type="button" className="button button--fullsize">
      MY POKEDEX
    </button>
  )
}
