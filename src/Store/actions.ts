import {Pokemon} from '../TypeDeclarations'

export function storePokemon(pokemon: Pokemon) {
  return {type: 'ADD_POKEMON', pokemon}
}

export function pokemonGuessed(id: number) {
  return {type: 'GUESS_POKEMON', id: id}
}

export function newGuessTarget(id: number) {
  return {type: 'SET_GUESS_TARGET', id: id}
}

export function nextTurn(shouldTakeNextGuess: boolean) {
  return {type: 'SHOULD_TAKE_NEXT_GUESS', shouldTakeNextGuess}
}

export function setIsDataComplete(isDataComplete: boolean) {
  return {type: 'SET_IS_DATA_COMPLETE', isDataComplete}
}

export function setIsPokedexComplete(isPokedexComplete: boolean) {
  return {type: 'SET_IS_POKEDEX_COMPLETE', isPokedexComplete}
}

export function togglePokedex() {
  return {type: 'TOGGLE_POKEDEX'}
}

export function selectPokemon(id) {
  return {type: 'SELECT_POKEMON', id}
}
