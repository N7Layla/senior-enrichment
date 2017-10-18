import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Home';
import Navbar from './Navbar';
import Campuses from './Campuses';
import Students from './Students';
import { fetchCampuses, submitCampus } from '../reducers/campuses';
import { fetchStudents } from '../reducers/students';
import { connect } from 'react-redux';
import store from '../store';

export class Main extends Component {

  componentDidMount () {
    this.props.fetchInitialData();
  }

  render () {
    return (
      <div>
        <Navbar />
        <main>
          <Switch>
            <Route path="/campuses" component={Campuses}  />
            <Route path="/students" component={Students} />
            <Route component={Home} />
          </Switch>
        </main>
      </div>
    );
  }
}


const mapProps = null;

const mapDispatch = dispatch => ({
  fetchInitialData: () => {
    store.dispatch(fetchCampuses());
    store.dispatch(fetchStudents());
  }
});

export default connect(mapProps, mapDispatch)(Main);
