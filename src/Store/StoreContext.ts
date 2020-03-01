import React, {createContext} from 'react'
import {initialState} from './initialState'
import {Store} from '../TypeDeclarations'

export default createContext<Store>([initialState, function() {}])
