import React, {useReducer, ReactChildren} from 'react'
import rootReducer from './rootReducer'
import {initialState} from './initialState'
import {StoreType} from '../TypeDeclarations'
import StoreContext from './StoreContext'

export default function Store({children}: Props) {
  const Store: StoreType = useReducer(rootReducer, initialState)
  return <StoreContext.Provider value={Store}>{children}</StoreContext.Provider>
}

interface Props {
  children: {}
}
