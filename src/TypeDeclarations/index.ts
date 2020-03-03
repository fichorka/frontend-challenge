import {Dispatch} from 'react'

export type StoreT = [State, DispatchT]
export interface State {
  data: Pokemon[]
  selected: number
  totalPokemon: 151
  guessTarget: number
  isPokedexComplete: boolean
  isPokedexVisible: boolean
  isNextPokemonRequested: boolean
  shouldCheckCompletion: boolean
  isCompleteModalVisible: boolean
}
export interface Pokemon {
  id?: number
  name?: string
  isGuessed?: boolean
  imageUrl?: string
  shinyImageUrl?: string
  stats?: {
    hp: number
    speed: number
    attack: number
    defense: number
  }
}

export type DispatchT = Dispatch<{type: string; [key: string]: any}>
