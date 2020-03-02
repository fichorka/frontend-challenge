import React, {useContext, Dispatch} from 'react'
import {StoreContext} from './Store'
import Game from './Components/Game'
import Pokedex from './Components/Pokedex'
import usePokedexProgress from './Hooks/usePokedexProgress'
import usePokedexVisibility from './Hooks/usePokedexVisibility'
import usePokemonFetch from './Hooks/usePokemonFetch'
import CompleteModal from './Components/CompleteModal'
import {State} from './TypeDeclarations'

export default function App() {
  // global state
  const [state, dispatch]: [State, Dispatch<{[key: string]: any}>] = useContext(
    StoreContext
  )

  // custom hook for handling and syncing changes in state
  usePokedexProgress(state, dispatch)
  usePokedexVisibility(state)
  usePokemonFetch(state, dispatch)
  return (
    <>
      {!state.isPokedexVisible && <Game />}
      {state.isPokedexVisible && <Pokedex />}
      {state.isCompleteModalVisible === true && <CompleteModal />}
    </>
  )
}
