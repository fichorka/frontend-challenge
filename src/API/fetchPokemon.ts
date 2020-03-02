import {Pokemon} from '../TypeDeclarations'

const apiEndpoint = 'https://pokeapi.co/api/v2'
const pokemonEndpoint = apiEndpoint + '/pokemon'

export function fetchPokemon(id: number): Promise<Pokemon> {
  const url = pokemonEndpoint + '/' + id
  return fetch(url)
    .then(res => res.json())
    .then(res => ({
      id: res.id,
      name: res.name,
      isGuessed: false,
      imageUrl: res.sprites.front_default,
      shinyImageUrl: res.sprites.front_shiny,
      stats: {
        hp: res.stats.filter(s => s.stat.name === 'hp')[0].base_stat,
        speed: res.stats.filter(s => s.stat.name === 'speed')[0].base_stat,
        attack: res.stats.filter(s => s.stat.name === 'attack')[0].base_stat,
        defense: res.stats.filter(s => s.stat.name === 'defense')[0].base_stat
      }
    })) as Promise<Pokemon>
}
