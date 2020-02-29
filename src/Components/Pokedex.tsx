import React, {useContext} from 'react'
import {StoreContext} from '../Store'
import PokedexList from '../Styles/PokedexList'
import PokedexDetails from '../Styles/PokedexDetails'
import PokedexHeader from '../Styles/PokedexHeader'

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
