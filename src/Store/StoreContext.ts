import React, {createContext} from 'react'
import {initialState} from './initialState'
import {StoreType} from '../TypeDeclarations'

export default createContext<StoreType>([initialState, function() {}])
