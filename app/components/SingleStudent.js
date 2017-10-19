import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import EditStudent from './EditStudent';
import { NavLink, withRouter } from 'react-router-dom';

export function SingleStudent(props) {
  const student = props.student;
  const campuses = props.campuses;
  return (
    <div className="single-student">
    <h2>{student.name}</h2>
    <p>{student.email}</p>
    <p>{
        campuses.map(campus =>
         (campus.id === student.campusId ? <NavLink key={campus.id} to={`/campuses/${campus.id}`}>{campus.name}</NavLink> : '')
          )
        }</p>
    <EditStudent student={student} />
    </div>
  )
}

const mapState = ({campuses, students}, ownProps) => {
  const paramId = Number(ownProps.match.params.id);
  return {
    student: _.find(students, student => student.id === paramId) || {name: '', email: '', campusId: 1},
    campuses
  }
}

const mapDispatch = {};

export default withRouter(connect(mapState, mapDispatch)(SingleStudent));
