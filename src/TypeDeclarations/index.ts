export type StoreType = [StateInterface, CallableFunction]
export interface StateInterface {
  pokemon: {
    data: Pokemon[]
    shouldFetchRandom: boolean
    isPokemonDataComplete: boolean
  }
}
export interface Pokemon {
  id: number
  name: string
  imageUrl: string
}
