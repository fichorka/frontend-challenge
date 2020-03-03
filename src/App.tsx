import React, {useContext, Dispatch, createRef, RefObject} from 'react'
import {StoreContext} from './Store'
import Game from './Components/Game'
import Pokedex from './Components/Pokedex'
import usePokedexProgress from './Hooks/usePokedexProgress'
import useModalVisibility from './Hooks/useModalVisibility'
import usePokemonFetch from './Hooks/usePokemonFetch'
import CompleteModal from './Components/CompleteModal'
import {State} from './TypeDeclarations'

export default function App() {
  // global state
  const [state, dispatch]: [State, Dispatch<{[key: string]: any}>] = useContext(
    StoreContext
  )

  const modBgRef: RefObject<HTMLDivElement> = createRef()

  // custom hook for handling and syncing changes in state
  usePokedexProgress(state, dispatch)
  useModalVisibility(state, modBgRef)
  usePokemonFetch(state, dispatch)
  return (
    <>
      {!state.isPokedexVisible && <Game />}
      <div className="modal-bg" ref={modBgRef}></div>
      {state.isPokedexVisible && <Pokedex />}
      {state.isCompleteModalVisible === true && <CompleteModal />}
    </>
  )
}
