import React, {createRef, RefObject, useContext} from 'react'
import {Pokemon, State} from '../TypeDeclarations'
import {StoreContext} from '../Store'
import Hint from './Hint'

export default function PokemonImage(props: Props) {
  const state: State = useContext(StoreContext)[0]
  const {
    pokemon,
    modifier,
    handleClick = () => {
      return
    },
    isGuessing
  } = props
  const {isGuessed, id, name, imageUrl, shinyImageUrl} = pokemon || {}
  const finalUrl =
    isGuessed || isGuessing
      ? state.isPokedexComplete
        ? shinyImageUrl || imageUrl
        : imageUrl
      : undefined

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
      {modifier === 'game' && <Hint name={name} />}
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
