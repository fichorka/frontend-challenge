import React from 'react'
import Store from './Store'
import GuessingGame from './Components/GuessingGame'
import PokedexButton from './Components/PokedexButton'
import Pokedex from './Components/Pokedex'

export default function App() {
  return (
    <Store>
      <h1 className="page-title">GUESS THAT POKEMON!</h1>
      <GuessingGame />
      <PokedexButton />
      <Pokedex />
    </Store>
  )
}
