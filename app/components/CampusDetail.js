import React from 'react';
import { connect } from 'react-redux';
import SingleCampus from './SingleCampus';
import EditCampus from './EditCampus';
import NewStudent from './NewStudent';
import { NavLink, withRouter } from 'react-router-dom';
import _ from 'lodash';

export function CampusDetail(props) {

  //let campuses = this.props.campuses.filter(campus => campus.id === paramId)
  const campus = props.campus;
  return (
    <div className="single-campus">
    <EditCampus campus={campus} />
    <SingleCampus campus={campus} />
    <ul className="campus-students">
    {
      props.students.map(student =>
    (campus.id === student.campusId ? <li key={student.id}>
     <p><NavLink to={`/students/${student.id}`}>{student.name}</NavLink></p>
     <p><button
      onClick={() => props.deleteStudent(student.id)}
      className="btn btn-default">X
      </button></p></li> : '')
    )
    }</ul>
    <NewStudent />
    </div>
  )

}

const mapState = ({campuses, students}, ownProps) => {
  const paramId = Number(ownProps.match.params.id);
  return {
    campus: _.find(campuses, campus => campus.id === paramId) || {name: '', description: '', image: ''},
    students
  }
}

export default withRouter(connect(mapState)(CampusDetail));
