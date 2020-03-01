import {State} from '../TypeDeclarations'

export const initialState: State = {
  data: [],
  selected: null,
  totalPokemon: 151,
  guessTarget: null,
  shouldTakeNextGuess: true,
  isDataComplete: false,
  isPokedexComplete: false,
  isPokedexVisible: false
}
