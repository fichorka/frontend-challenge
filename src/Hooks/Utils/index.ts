import {getPokemon} from '../../Store/selectors'

// returns pokemon id that hasn't been guessed yet
export function randomPokemonId(state) {
  let id: number
  let pokemon
  do {
    id = Math.floor(1 + Math.random() * 151)
    pokemon = getPokemon(state, id)
  } while (pokemon && pokemon.isGuessed)
  return id
}
