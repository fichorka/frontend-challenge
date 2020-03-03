import React, {useContext} from 'react'
import {State} from '../TypeDeclarations'
import {StoreContext} from '../Store'
import {getTotalGuessedPokemon} from '../Store/selectors'

export default function ProgressBar() {
  const state: State = useContext(StoreContext)[0]
  const guessedNum = getTotalGuessedPokemon(state)
  const {totalPokemon} = state
  const width = (guessedNum / totalPokemon) * 100 + '%'

  return (
    <div className="progress-bar">
      <div
        className="progress-bar__progress"
        style={{
          width: width
        }}
      ></div>
      {guessedNum} / {totalPokemon}
    </div>
  )
}
