import React, { Component } from 'react';
import { Route, Switch, Redirect, BrowserRouter } from 'react-router-dom';
import Navbar from './Navbar';
import Campuses from './Campuses';
import Students from './Students';
import store, { fetchCampuses, fetchStudents } from '../store';

export default class Main extends Component {

  componentDidMount () {
    const campusesThunk = fetchCampuses();
    const studentsThunk = fetchStudents();
    store.dispatch(campusesThunk);
    store.dispatch(studentsThunk);
  }

  render () {
    return (
      <div>
        <Navbar />
        <main>
        <BrowserRouter>
          <Switch>
            <Route path="/campuses" component={Campuses} />
            <Route path="/students" component={Students} />
          </Switch>
          </BrowserRouter>
        </main>
      </div>
    );
  }
}
