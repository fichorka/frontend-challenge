import React, {useContext} from 'react'
import {StoreContext} from '../Store'
import {toggleCompleteModal} from '../Store/actions'

export default function CompleteModal() {
  const dispatch = useContext(StoreContext)[1]
  return (
    <div className="complete-modal">
      <span className="complete-modal__title">You caught them all!</span>
      <span className="complete-modal__message">
        The appearence of Your Pokemon is updated, take a look in Your Pokedex
      </span>
      <button
        type="button"
        onClick={() => {
          dispatch(toggleCompleteModal())
        }}
        className="button button--rounded button--center"
      >
        OK
      </button>
    </div>
  )
}
