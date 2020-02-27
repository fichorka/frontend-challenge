import React from 'react'
import {render} from 'react-dom'
import App from './App'
import './styles/index.scss'

const appContainer = document.getElementById('app-container')

render(<App />, appContainer)
