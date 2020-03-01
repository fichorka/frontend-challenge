import React, {useReducer} from 'react'
import rootReducer from './rootReducer'
import {initialState} from './initialState'
import {StoreT} from '../TypeDeclarations'
import StoreContext from './StoreContext'

export default function Store({children}: Props) {
  // store instantiates here:
  const store: StoreT = useReducer(rootReducer, initialState)
  return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
}

interface Props {
  children: {}
}
