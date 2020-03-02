import {State} from '../TypeDeclarations'

export const initialState: State = {
  data: [],
  selected: null,
  totalPokemon: 151,
  guessTarget: null,
  isPokedexComplete: false,
  isPokedexVisible: false,
  isNextPokemonRequested: false,
  shouldCheckCompletion: true
}
