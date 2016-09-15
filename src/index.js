import React from 'react'
import ReactDOM from 'react-dom'
import { useStrict } from 'mobx'
import Counter from './Counter'
import App from './App'
import './index.css'

useStrict(true)

ReactDOM.render(
  <App counter={new Counter()} />,
  document.getElementById('root')
)
