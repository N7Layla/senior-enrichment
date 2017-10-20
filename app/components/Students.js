import React from 'react';
import NewStudent from './NewStudent';
import { deleteStudent } from '../reducers/students';
import { connect } from 'react-redux';
import { NavLink, withRouter } from 'react-router-dom';

export function Students(props) {
  const students = props.students;
  const campuses = props.campuses;
    return (
    <div className="students-page">
     <div className="students-flex">
      <h2>Students:</h2>
      {
        students.map(student =>
        (<div key={student.id}>
        <div className="student-info">
        <NavLink to={`/students/${student.id}`}><h3 className="student-name">{student.name}</h3></NavLink>
        <div className="student-email">{student.email}</div>
        <div className="student-campus">{
          campuses.map(campus =>
            (campus.id === student.campusId ? <NavLink key={campus.id} to={`/campuses/${campus.id}`}>{campus.name}</NavLink> : '')
          )
        }</div>
        <p><button
        onClick={() => props.deleteStudent(student.id)}
        className="btn btn-default">X
       </button></p>
        </div></div>
        )
        )
      }
     </div>
      <div className="addStudent"><NewStudent /></div>
     </div>
    )
}

const mapState = ({students, campuses}) => ({students, campuses});

const mapDispatch = { deleteStudent };

export default withRouter(connect(mapState, mapDispatch)(Students));
