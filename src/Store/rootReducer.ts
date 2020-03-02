import {State} from '../TypeDeclarations'

export default function(state: State, action): State {
  switch (action.type) {
    case 'ADD_POKEMON':
      return {
        ...state,
        data: [...state.data, action.pokemon]
      }
    case 'GUESS_POKEMON': {
      const newData = state.data.slice()
      const pokemon = newData.filter(p => p.id === action.id)[0]
      const i = newData.indexOf(pokemon)
      if (i !== -1) newData[i].isGuessed = true

      return {
        ...state,
        data: newData,
        isNextPokemonRequested: true
      }
    }
    case 'NEW_GUESS_TARGET':
      return {
        ...state,
        guessTarget: action.id,
        isNextPokemonRequested: false
      }
    case 'POKEDEX_IS_COMPLETE':
      return {
        ...state,
        isPokedexComplete: true
      }
    case 'TOGGLE_POKEDEX':
      return {
        ...state,
        isPokedexVisible: !state.isPokedexVisible
      }
    case 'SELECT_POKEMON':
      return {
        ...state,
        selected: action.id
      }
    case 'NEXT_POKEMON':
      return {
        ...state,
        isNextPokemonRequested: true
      }
  }
}
