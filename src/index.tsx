import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import './index.css'
import App from './containers/App'
import configureStore from './state/store'

const store = configureStore({ github: { repos: [1, 2, 3, 4] } })

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
