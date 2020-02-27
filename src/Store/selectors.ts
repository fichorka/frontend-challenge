export function getPokemon(state, id) {
  return state.data.filter(p => p.id === id)[0]
}
