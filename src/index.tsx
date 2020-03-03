import React from 'react'
import {render} from 'react-dom'
import App from './App'
import './Styles/index.scss'
import Store from './Store'

const appContainer = document.getElementById('app-container')

render(<RootComponent />, appContainer)

function RootComponent() {
  return (
    <Store>
      <App />
    </Store>
  )
}
