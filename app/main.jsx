'use strict'
import React from 'react'
import {render} from 'react-dom'
import { Provider } from 'react-redux'

import store from './store'
import Root from './components/Root'
import Campuses from './components/Campuses'

render(
  <Provider store={store}>
    <Campuses hello="hello" />
  </Provider>,
  document.getElementById('main')
)
