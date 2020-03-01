import React, {useContext, useState} from 'react'
import {StoreContext, getPokemon} from '../Store'
import {nextTurn, pokemonGuessed} from '../Store/actions'

export default function GameForm() {
  const [state, dispatch] = useContext(StoreContext)
  const pokemon = getPokemon(state, state.guessTarget)
  const [userInput, setUserInput] = useState('')
  function tryToGues(e) {
    e.preventDefault()
    if (userInput === pokemon.name) {
      dispatch(pokemonGuessed(pokemon.id))
      dispatch(nextTurn(true))
      setUserInput('')
    }
  }
  function inputHandler(e) {
    setUserInput(e.target.value)
  }
  function nextPokemon() {
    dispatch(nextTurn(true))
    setUserInput('')
  }
  return (
    <form className="form" onSubmit={tryToGues}>
      <input
        className="form__user-input form__user-input--rounded-left"
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
  )
}
