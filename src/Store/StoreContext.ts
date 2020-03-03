import {createContext} from 'react'
import {initialState} from './initialState'
import {StoreT} from '../TypeDeclarations'

export default createContext<StoreT>([initialState, function() {}])
