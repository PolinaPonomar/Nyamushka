import './index.scss'
import React from 'react'
import {render} from 'react-dom'
import App from './components/App'

render(
  <App num={1234}/>,
  document.getElementById('root')
)