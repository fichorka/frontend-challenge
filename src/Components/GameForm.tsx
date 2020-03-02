import React, {useContext, useState, Dispatch} from 'react'
import {StoreContext, getPokemon} from '../Store'
import {nextPokemon, pokemonGuessed} from '../Store/actions'
import {State} from '../TypeDeclarations'

export default function GameForm() {
  const [state, dispatch]: [State, Dispatch<{[key: string]: any}>] = useContext(
    StoreContext
  )
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
        disabled={state.isPokedexComplete}
        className="form__user-input form__user-input--rounded-left"
        type="text"
        value={userInput}
        onChange={inputHandler}
      />
      <button
        disabled={state.isPokedexComplete}
        className="button button--rounded-right"
      >
        GUESS
      </button>
      <button
        disabled={state.isPokedexComplete}
        type="button"
        className="button button--rounded button--right"
        onClick={handleNextButton}
      >
        NEXT
      </button>
      {pokemon ? pokemon.name : ''}
    </form>
  )
}
