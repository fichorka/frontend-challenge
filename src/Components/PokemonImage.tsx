import React from 'react'
import {Pokemon} from '../TypeDeclarations'

export default function PokemonImage(props: Props) {
  const {pokemon, modifier, handleClick = () => {}, isGuessing} = props
  const {isGuessed, id, imageUrl} = pokemon || {}
  const finalUrl = isGuessed || isGuessing ? imageUrl : '(unknown)'
  return (
    <div
      className={
        'image-container' + (modifier ? ' image-container--' + modifier : '')
      }
      onClick={() => handleClick(id)}
    >
      <img className={'image-container__image'} src={finalUrl} alt="" />
    </div>
  )
}

interface Props {
  modifier: 'game' | 'list' | 'details'
  pokemon?: Pokemon
  handleClick?: CallableFunction
  isGuessing?: boolean
}
