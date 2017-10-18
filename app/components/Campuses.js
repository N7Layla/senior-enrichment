import React, { Component} from 'react';
import store from '../store';
import { connect } from 'react-redux';
import _ from 'lodash';
import NewCampus from './NewCampus';
import SingleCampus from './SingleCampus';
import { NavLink } from 'react-router-dom';
//import { removeCampus } from '../reducers/campuses';

export class Campuses extends Component {

  render() {
    return (
      <div>
        <div className="addCampus"><NewCampus /></div>
          <div className="campusContainer">
          {
            this.props.campuses.map(campus =>
            (<div className="campus" key={campus.id}>
             <NavLink
              className="campus-link"
              activeClassName="active"
              to={`/campuses/${campus.id}`}><h2>{campus.name}</h2></NavLink>
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
// const mapState = ({campuses}, ownProps) => {
//   const paramId = Number(ownProps.match.params.id);
//   return {
//     campus: _.find(campuses, campus => campus.id === paramId)
//   }
// }

const mapDispatch = {}

export default connect(mapState, mapDispatch)(Campuses);
