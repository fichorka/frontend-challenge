import {useEffect} from 'react'

export default function useBodyClass(isPokedexVisible: boolean) {
  useEffect(() => {
    if (isPokedexVisible) document.body.classList.add('body--dark')
    else document.body.classList.remove('body--dark')
  }, [isPokedexVisible])
}
