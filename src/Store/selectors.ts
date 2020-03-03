import {Pokemon, State} from '../TypeDeclarations'

export function getPokemon(state: State, id: number): Pokemon | undefined {
  return state.data.filter(p => p.id === id)[0]
}

export function getFullPokemonList(state): Pokemon[] {
  const result = []
  for (let i = 1; i < state.totalPokemon + 1; i++) {
    const pokemon = getPokemon(state, i) || {id: i, name: 'unknown'}
    result.push(pokemon)
  }
  return result
}

export function getGuessedPokemons(state): Pokemon[] {
  return state.data.filter(p => p.isGuessed === true)
}
