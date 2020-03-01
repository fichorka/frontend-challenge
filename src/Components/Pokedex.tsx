import React from 'react'
import PokedexList from './PokedexList'
import PokedexDetails from './PokedexDetails'
import PokedexHeader from './PokedexHeader'

export default function Pokedex() {
  return (
    <div className={'pokedex'}>
      <PokedexHeader />

      <div className="pokedex__body">
        <PokedexDetails />
        <PokedexList />
      </div>
    </div>
  )
}
