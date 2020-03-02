import React, {createRef, RefObject} from 'react'
import {Pokemon} from '../TypeDeclarations'

export default function PokemonImage(props: Props) {
  const {
    pokemon,
    modifier,
    handleClick = () => {
      return
    },
    isGuessing
  } = props
  const {isGuessed, id, imageUrl} = pokemon || {}
  const finalUrl = isGuessed || isGuessing ? imageUrl : undefined

  // refObjects used for dom updates
  const imageRef: RefObject<HTMLImageElement> = createRef()
  const containerRef: RefObject<HTMLDivElement> = createRef()

  function onLoadHandler() {
    // update class attribute
    imageRef.current.classList.remove('image-container__image--loading')
    containerRef.current.classList.remove('image-container--loading')
  }

  return (
    <div
      ref={containerRef}
      className={
        finalUrl
          ? 'image-container image-container--loading' +
            (modifier ? ' image-container--' + modifier : '')
          : 'image-container' +
            (modifier ? ' image-container--' + modifier : '')
      }
      onClick={() => handleClick(id)}
    >
      <img
        ref={imageRef}
        key={finalUrl + id}
        onLoad={onLoadHandler}
        className={
          finalUrl
            ? 'image-container__image image-container__image--loading'
            : 'image-container__image'
        }
        src={finalUrl}
        alt=""
      />
    </div>
  )
}

interface Props {
  modifier: 'game' | 'list' | 'details'
  pokemon?: Pokemon
  handleClick?: (id: number) => void
  isGuessing?: boolean
}
