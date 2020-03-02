import {Pokemon} from '../TypeDeclarations'

export function storePokemon(pokemon: Pokemon) {
  return {type: 'ADD_POKEMON', pokemon}
}

export function pokemonGuessed(id: number) {
  return {type: 'GUESS_POKEMON', id: id}
}

export function newGuessTarget(id: number) {
  return {type: 'NEW_GUESS_TARGET', id: id}
}

export function nextPokemon() {
  return {type: 'NEXT_POKEMON'}
}

export function pokedexIsCompleted() {
  return {type: 'POKEDEX_IS_COMPLETE'}
}

export function togglePokedex() {
  return {type: 'TOGGLE_POKEDEX'}
}

export function selectPokemon(id) {
  return {type: 'SELECT_POKEMON', id}
}
