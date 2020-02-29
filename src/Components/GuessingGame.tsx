import React, {useContext, useState} from 'react'
import StoreContext from '../Store/StoreContext'
import {getPokemon} from '../Store'
import usePokemonFetch from '../Hooks/usePokemonFetch'
import PokemonImage from './PokemonImage'
import {pokemonGuessed, nextTurn} from '../Store/actions'
import PokedexButton from './PokedexButton'

export default function GuessingGame() {
  const [state, dispatch] = useContext(StoreContext)
  const [userInput, setUserInput] = useState('')
  usePokemonFetch(state, dispatch)
  const pokemon = getPokemon(state, state.guessTarget)
  function inputHandler(e) {
    setUserInput(e.target.value)
  }
  function tryToGues(e) {
    e.preventDefault()
    if (userInput === pokemon.name) {
      dispatch(pokemonGuessed(pokemon.id))
      dispatch(nextTurn(true))
      setUserInput('')
    }
  }

  function nextPokemon() {
    dispatch(nextTurn(true))
    setUserInput('')
  }

  return (
    <>
      <h1 className="page-title">GUESS THAT POKEMON!</h1>
      <PokemonImage
        src={pokemon ? pokemon.imageUrl : ''}
        modifier="guessing-game"
      />
      <form className="form" onSubmit={tryToGues}>
        <input
          className="form__user-input"
          type="text"
          value={userInput}
          onChange={inputHandler}
        />
        <button className="button button--rounded-right">GUESS</button>
        <button
          type="button"
          className="button button--row"
          onClick={nextPokemon}
        >
          NEXT
        </button>
      </form>
      {pokemon && (
        <span style={{display: 'block', textAlign: 'center'}}>
          {getPokemon(state, state.guessTarget).name}
        </span>
      )}
      <PokedexButton />
    </>
  )
}
