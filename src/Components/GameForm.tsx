import React, {useContext, useState} from 'react'
import {StoreContext, getPokemon} from '../Store'
import {nextPokemon, pokemonGuessed} from '../Store/actions'

export default function GameForm() {
  const [state, dispatch] = useContext(StoreContext)
  const pokemon = getPokemon(state, state.guessTarget)
  const [userInput, setUserInput] = useState('')
  function tryToGues(e) {
    e.preventDefault()
    if (userInput === pokemon.name) {
      dispatch(pokemonGuessed(pokemon.id))
      setUserInput('')
    }
  }
  function inputHandler(e) {
    setUserInput(e.target.value)
  }
  function handleNextButton() {
    dispatch(nextPokemon())
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
        onClick={handleNextButton}
      >
        NEXT
      </button>
      {pokemon ? pokemon.name : ''}
    </form>
  )
}
