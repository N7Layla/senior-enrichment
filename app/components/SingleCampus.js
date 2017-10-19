import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, NavLink, Route } from 'react-router-dom';
import CampusDetail from './CampusDetail';
import { deleteCampus } from '../reducers/campuses';
import _ from 'lodash';

export class SingleCampus extends Component {
  render() {
    console.log("PROPS", this.props)
    const campus = this.props.campus;
    //const id = this.props.campusId;
    //const paramId = this.props.match.params.id || this.props.campus.id;
    //const campuses = this.props.campuses;
    return (
    <div>
    <Link
      className="campus-link"
      to={`/campuses/${campus.id}`}><h2>{campus.name}</h2></Link>
        <hr />
    {campus.description}<br />
    <img width="100px" src={campus.image} /><br />
    <button
       className="btn btn-default">Students
       </button> <button
        onClick={() => this.props.deleteCampus(campus.id)}
        className="btn btn-default">X
       </button>
      </div>
    )
  }
}

const mapState = ({ campuses }) => ({ campuses });
// const mapState = ({campuses}, ownProps) => {
//   const paramId = Number(ownProps.match.params.id);
//   return {
//     campus: _.find(campuses, campus => campus.id === paramId)
//   }
// }

const mapDispatch = { deleteCampus };

export default connect(mapState, mapDispatch)(SingleCampus);
