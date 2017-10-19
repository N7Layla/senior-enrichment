import React, { Component} from 'react';
import store from '../store';
import { connect } from 'react-redux';
import _ from 'lodash';
import NewCampus from './NewCampus';
import SingleCampus from './SingleCampus';
import { Link, NavLink } from 'react-router-dom';

export class Campuses extends Component {

  render() {
    return (
      <div>
        <div className="addCampus"><NewCampus /></div>
          <div className="campusContainer">
          {
            this.props.campuses.map(campus =>
            (<div className="campus" key={campus.id}>
              <SingleCampus campus={campus} students={this.props.students} />
            </div>)
            )
          }
          </div>
        </div>
    )
  }
}

const mapState = ({ campuses, students }) => ({ campuses, students });

const mapDispatch = {}

export default connect(mapState, mapDispatch)(Campuses);
