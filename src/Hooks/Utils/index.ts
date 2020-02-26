import {selectPokemon} from '../../Store/selectors'

// returns pokemon id that hasn't been guessed yet
export function randomPokemonId(state) {
  let id: number
  let pokemon
  do {
    id = Math.floor(1 + Math.random() * 150)
    pokemon = selectPokemon(state, id)
  } while (pokemon && pokemon.isGuessed)
  return id
}
