export function addPokemonToData(pokemon: {}) {
  return {type: 'ADD_POKEMON', pokemon: pokemon}
}

export function guessPokemon(id: number) {
  return {type: 'GUESS_POKEMON', id: id}
}
