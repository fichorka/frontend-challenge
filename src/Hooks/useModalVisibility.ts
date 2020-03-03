import {useEffect} from 'react'
import {State} from '../TypeDeclarations'

export default function useModalVisibility(state: State, modBgRef) {
  // custom hook for controlling className on HTML modal element
  useEffect(() => {
    if (state.isPokedexVisible || state.isCompleteModalVisible) {
      modBgRef.current.classList.add('modal-bg--open')
    } else modBgRef.current.classList.remove('modal-bg--open')
  }, [state.isPokedexVisible, state.isCompleteModalVisible])
}
