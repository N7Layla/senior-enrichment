'use strict'
import React, { Component } from 'react'
import {render} from 'react-dom'
import { Provider } from 'react-redux'
import { Route, Switch, Redirect } from 'react-router-dom';

import store, { fetchCampuses } from './store'
//import Root from './components/Root'
import Campuses from './components/Campuses'
import Students from './components/Students'
import Navbar from './components/Navbar'

export class Main extends Component {
  componentDidMount() {
    const campusesThunk = fetchCampuses();
    store.dispatch(campusesThunk);
  }

  render() {
    return (
    <Provider store={store}>
      <Navbar />
      <Switch>
      <Route path="/campuses" component={Campuses} />
      <Route path="/students" component={Students} />
      </Switch>
    </Provider>,
    document.getElementById('main')
    )
  }
}
