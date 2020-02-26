export type StoreType = [StateInterface, CallableFunction]
export interface StateInterface {
  data: Pokemon[]
  guessTarget: number
  isCurPokemonGuessed: boolean
  isDataComplete: boolean
  isPokedexComplete: boolean
}
export interface Pokemon {
  id: number
  name: string
  isGuessed: boolean
  imageUrl: string
  stats: {
    hp: number
    speed: number
    attack: number
    defense: number
  }
}
