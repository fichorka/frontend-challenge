import {useEffect} from 'react'
import {State} from '../TypeDeclarations'

export default function usePokedexVisibility(state: State) {
  // custom hook for controlling HTML body class on Pokedex (modal) visibility change
  useEffect(() => {
    if (state.isPokedexVisible) {
      document.body.classList.add('body--dark')
    } else document.body.classList.remove('body--dark')
  }, [state.isPokedexVisible])
}
