export type StoreT = [State, CallableFunction]
export interface State {
  data: Pokemon[]
  selected: number
  totalPokemon: 151
  guessTarget: number
  shouldTakeNextGuess: boolean
  isDataComplete: boolean
  isPokedexComplete: boolean
  isPokedexVisible: boolean
}
export interface Pokemon {
  id: number
  name: string
  isGuessed?: boolean
  imageUrl?: string
  stats?: {
    hp: number
    speed: number
    attack: number
    defense: number
  }
}
