import React, {useContext} from 'react'
import {StoreContext} from './Store'
import Game from './Components/Game'
import Pokedex from './Components/Pokedex'
import usePokedexProgress from './Hooks/usePokedexProgress'
import usePokedexVisibility from './Hooks/usePokedexVisibility'

export default function App() {
  const [state, dispatch] = useContext(StoreContext)

  // custom hook for handling and syncing changes in state
  usePokedexProgress(state, dispatch)
  usePokedexVisibility(state)
  return (
    <>
      {!state.isPokedexVisible && <Game />}
      {state.isPokedexVisible && <Pokedex />}
    </>
  )
}
