import React, {useContext, useState, Dispatch} from 'react'
import {StoreContext, getPokemon} from '../Store'
import {nextPokemon, pokemonGuessed} from '../Store/actions'
import {State} from '../TypeDeclarations'

export default function GameForm() {
  const [state, dispatch]: [State, Dispatch<{[key: string]: any}>] = useContext(
    StoreContext
  )

  // local state
  const [isFetchBusy, setIsFetchBusy] = useState(false)
  const [userInput, setUserInput] = useState('')
  const [isInputInvalid, setIsInputInvalid] = useState(false)
  const pokemon = getPokemon(state, state.guessTarget)

  // logic
  const inputClassModifier = isInputInvalid ? ' form__user-input--invalid' : ''

  // handlers
  function handleSubmit(e) {
    e.preventDefault()
    if (userInput.toLowerCase() === pokemon.name) {
      dispatch(pokemonGuessed(pokemon.id))
      setUserInput('')
    } else {
      setIsInputInvalid(true)
    }
  }

  function handleChange(e) {
    setUserInput(e.target.value)
    setIsInputInvalid(false)
  }

  function handleNextButton() {
    // max next rate is set to 1/1.25 second
    if (!isFetchBusy) {
      setIsFetchBusy(true)
      setIsInputInvalid(false)

      dispatch(nextPokemon())
      setUserInput('')

      window.setTimeout(() => {
        setIsFetchBusy(false)
      }, 1250)
    }
  }
  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        disabled={state.isPokedexComplete}
        className={
          'form__user-input form__user-input--rounded-left' + inputClassModifier
        }
        type="text"
        value={userInput}
        onChange={handleChange}
      />
      <button
        disabled={state.isPokedexComplete}
        className="button button--rounded-right"
      >
        GUESS
      </button>
      <button
        disabled={isFetchBusy || state.isPokedexComplete}
        type="button"
        className="button button--rounded button--right"
        onClick={handleNextButton}
      >
        NEXT
      </button>
    </form>
  )
}
