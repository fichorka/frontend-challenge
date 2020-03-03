import React, {createRef, RefObject, useContext} from 'react'
import {Pokemon, State} from '../TypeDeclarations'
import {StoreContext} from '../Store'
import Hint from './Hint'

// used by Game, PokedexList and PokedexDetails
export default function PokemonImage({
  pokemon,
  modifier,
  handleClick = () => {
    return
  },
  isGuessing
}: Props) {
  const state: State = useContext(StoreContext)[0]
  const {isGuessed, id, name, imageUrl, shinyImageUrl} = pokemon || {}

  // if guessing OR guessed get url, else set url to undefined
  const finalUrl =
    isGuessing || isGuessed
      ? state.isPokedexComplete
        ? shinyImageUrl
        : imageUrl
      : undefined

  const shouldLoadSpinner = finalUrl || (isGuessing && !state.isPokedexComplete)

  // refObjects used for dom updates
  const imageRef: RefObject<HTMLImageElement> = createRef()
  const containerRef: RefObject<HTMLDivElement> = createRef()

  function onLoadHandler() {
    // update class attribute
    imageRef.current.classList.remove('image-container__image--loading')
    containerRef.current.classList.remove('image-container--loading')
  }

  return (
    // image-container
    <div
      ref={containerRef}
      key={id + name}
      id={name}
      className={
        shouldLoadSpinner
          ? 'image-container image-container--loading' +
            (modifier ? ' image-container--' + modifier : '')
          : 'image-container' +
            (modifier ? ' image-container--' + modifier : '')
      }
      onClick={() => handleClick(id)}
    >
      {/* hint component */}
      {modifier === 'game' && <Hint name={name} />}

      {/* image */}
      <img
        ref={imageRef}
        key={finalUrl + id}
        onLoad={onLoadHandler}
        className={
          shouldLoadSpinner
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
