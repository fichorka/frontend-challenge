import React, {useState, createRef, RefObject} from 'react'
import useHintState from '../Hooks/useHintState'

export default function Hint({name}: Props) {
  // local state
  const [isHintVisible, setIsHintVisible] = useState(false)

  // local variables
  const buttonRef: RefObject<HTMLButtonElement> = createRef()
  const buttonLabel = isHintVisible ? 'X' : '?'
  function handleClick() {
    setIsHintVisible(!isHintVisible)
  }

  // controls button's className
  useHintState(isHintVisible, buttonRef)

  return (
    <div className={'hint'}>
      <button
        ref={buttonRef}
        type="button"
        className="hint__button"
        onClick={handleClick}
      >
        {buttonLabel}
      </button>
      {isHintVisible === true && <span className="hint__name">{name}</span>}
    </div>
  )
}

interface Props {
  name: string
}
