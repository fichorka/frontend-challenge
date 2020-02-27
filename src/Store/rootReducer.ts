export default function(state, action) {
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
        data: newData
      }
    }
    case 'SET_GUESS_TARGET':
      return {
        ...state,
        guessTarget: action.id
      }
    case 'SHOULD_TAKE_NEXT_GUESS':
      return {
        ...state,
        shouldTakeNextGuess: action.shouldTakeNextGuess
      }
    case 'SET_IS_DATA_COMPLETE':
      return {
        ...state,
        isDataComplete: action.isDataComplete
      }
    case 'SET_IS_POKEDEX_COMPLETE':
      return {
        ...state,
        isPokedexComplete: action.isPokedexComplete
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
  }
}
