import {State} from '../TypeDeclarations'

export const initialState: State = {
  data: [],
  selected: null,
  totalPokemon: 1,
  guessTarget: null,
  isPokedexComplete: false,
  isPokedexVisible: false,
  isNextPokemonRequested: false,
  shouldCheckCompletion: true,
  isCompleteModalVisible: false
}
