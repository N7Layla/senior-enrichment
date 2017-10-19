import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import Home from './Home';
import Navbar from './Navbar';
import Campuses from './Campuses';
import Students from './Students';
import CampusDetail from './CampusDetail';
import SingleStudent from './SingleStudent';
import { fetchCampuses } from '../reducers/campuses';
import { fetchStudents } from '../reducers/students';
import { connect } from 'react-redux';

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
            <Route exact path="/campuses" component={Campuses}  />
            <Route exact path="/students" component={Students} />
            <Route path="/campuses/:id" component={CampusDetail} />
            <Route path="/students/:id" component={SingleStudent} />
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
    dispatch(fetchCampuses());
    dispatch(fetchStudents());
  }
});

export default withRouter(connect(mapProps, mapDispatch)(Main));
