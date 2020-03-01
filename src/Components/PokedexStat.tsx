import React from 'react'

export default function PokedexStat(props) {
  const {label, value} = props
  return (
    <div className="stats__stat">
      <span className="stat__label">{label}</span>
      <span className="stat__value">{value}</span>
    </div>
  )
}
