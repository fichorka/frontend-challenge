import React, {useContext} from 'react'
import {StoreContext} from './Store'
import GuessingGame from './Components/GuessingGame'
import Pokedex from './Components/Pokedex'

export default function App() {
  const [state, dispatch] = useContext(StoreContext)
  console.log(state)
  return (
    <>
      {!state.isPokedexVisible && <GuessingGame />}
      {state.isPokedexVisible && <Pokedex />}
    </>
  )
}
