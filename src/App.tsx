import React, {useContext} from 'react'
import {StoreContext} from './Store'
import Game from './Components/Game'
import Pokedex from './Components/Pokedex'
import usePokedexProgress from './Hooks/usePokedexProgress'
import usePokedexVisibility from './Hooks/usePokedexVisibility'
import usePokemonFetch from './Hooks/usePokemonFetch'

export default function App() {
  const [state, dispatch] = useContext(StoreContext)

  // custom hook for handling and syncing changes in state
  usePokedexProgress(state, dispatch)
  usePokedexVisibility(state)
  usePokemonFetch(state, dispatch)
  return (
    <>
      {!state.isPokedexVisible && <Game />}
      {state.isPokedexVisible && <Pokedex />}
    </>
  )
}
