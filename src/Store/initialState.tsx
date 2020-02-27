import {StateInterface} from '../TypeDeclarations'

export const initialState: StateInterface = {
  data: [],
  selected: null,
  totalPokemon: 151,
  guessTarget: null,
  shouldTakeNextGuess: true,
  isDataComplete: false,
  isPokedexComplete: false,
  isPokedexVisible: false
}
