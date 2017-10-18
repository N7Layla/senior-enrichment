import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import CampusDetail from './CampusDetail';
import _ from 'lodash';

export class SingleCampus extends Component {
  render() {
    //console.log("PROPS", this.props)
    const campus = this.props.campus;
    //const paramId = this.props.match.params.id || this.props.campus.id;
    //const campuses = this.props.campuses;
    return (
    <div>
        <hr />
    {campus.description}<br />
    <img width="100px" src={campus.image} /><br />
    Students:
    <ul className="campus-students">{
    //   props.students.map(student =>
    //     (campus.id === student.campusId ? <li key={student.id}>{student.name}</li> : '')
    //   )
    }</ul>
    <button
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

const mapDispatch = {};

export default connect(mapState, mapDispatch)(SingleCampus);
