export default function(state, action) {
  switch (action.type) {
    case 'ADD_POKEMON':
      return {
        ...state,
        pokemon: {
          ...state.pokemon,
          data: [...state.data, action.pokemon]
        }
      }
    case 'GUESS_POKEMON': {
      const newData = state.data.slice()
      const pokemon = newData.filter(p => p.id === action.id)[0]
      const i = newData.indexOf(pokemon)
      if (i !== -1) newData[i].guessed = true

      return {
        ...state,
        pokemon: {
          ...state.pokemon,
          data: newData
        }
      }
    }
  }
}
