import React, {useContext} from 'react'
import {StoreContext} from './Store'
import Game from './Components/Game'
import Pokedex from './Components/Pokedex'
import useBodyClass from './Hooks/useBodyClass'

export default function App() {
  const state = useContext(StoreContext)[0]
  useBodyClass(state.isPokedexVisible)
  return (
    <>
      {!state.isPokedexVisible && <Game />}
      {state.isPokedexVisible && <Pokedex />}
    </>
  )
}
