import React, {useContext, useState} from 'react'

export default function PokemonImage(props) {
  const src = props.src || '(unknown)'
  const modifier = props.modifier
  const handleClick = props.handleClick
  const id = props.id
  return (
    <div
      className={
        'image-container' + (modifier ? ' image-container--' + modifier : '')
      }
      onClick={() => handleClick(id)}
    >
      <img className={'image-container__image'} src={src} alt="" />
    </div>
  )
}
