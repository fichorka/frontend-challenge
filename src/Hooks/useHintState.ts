import {useEffect} from 'react'

export default function useHintState(isHintVisible, buttonRef) {
  // custom hook: updates hint's button class attribute
  useEffect(() => {
    if (isHintVisible) {
      buttonRef.current.classList.add('hint__button--opened')
    } else {
      buttonRef.current.classList.remove('hint__button--opened')
    }
  }, [isHintVisible])
}
