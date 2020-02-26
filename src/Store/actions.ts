import {Pokemon} from '../TypeDeclarations'

export function addPokemon(pokemon: Pokemon) {
  return {type: 'ADD_POKEMON', pokemon}
}

export function guessPokemon(id: number) {
  return {type: 'GUESS_POKEMON', id: id}
}

export function setGuessTarget(id: number) {
  return {type: 'SET_GUESS_TARGET', id: id}
}

export function setIsCurPokemonGuessed(isCurPokemonGuessed: boolean) {
  return {type: 'SET_IS_CUR_POKEMON_GUESSED', isCurPokemonGuessed}
}

export function setIsDataComplete(isDataComplete: boolean) {
  return {type: 'SET_IS_DATA_COMPLETE', isDataComplete}
}

export function setIsPokedexComplete(isPokedexComplete: boolean) {
  return {type: 'SET_IS_POKEDEX_COMPLETE', isPokedexComplete}
}
