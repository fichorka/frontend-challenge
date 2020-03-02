import {useEffect} from 'react'
import {State} from '../TypeDeclarations'

export default function usePokedexVisibility(state: State) {
  // custom hook for controlling HTML body class on Pokedex (modal) visibility change
  useEffect(() => {
    if (state.isPokedexVisible || state.isCompleteModalVisible) {
      document.body.classList.add('body--dark')
    } else document.body.classList.remove('body--dark')
  }, [state.isPokedexVisible, state.isCompleteModalVisible])
}
