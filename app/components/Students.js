import React, { Component} from 'react';
import store from '../store';
import NewStudent from './NewStudent';
import { deleteStudent } from '../reducers/students';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

export class Students extends Component {
  render() {
  const students = this.props.students;
  const campuses = this.props.campuses;
    return (
    <div>
    <div className="addCampus"><NewStudent /></div>
     <section id="studentsContainer">
      <h2>Students:</h2>
      {
        students.map(student =>
        (<div key={student.id}>
        <div className="student-info">
        <Link to={`/students/${student.id}`}><h3 className="student-name">{student.name}</h3></Link>
        <p className="student-email">{student.email}</p>
        <p className="student-campus">{
          campuses.map(campus =>
            (campus.id === student.campusId ? campus.name : '')
          )
        }</p>
        <p><button
        onClick={() => this.props.deleteStudent(student.id)}
        className="btn btn-default">X
       </button></p>
        </div></div>
        )
        )
      }
     </section>
     </div>
    )
  }
}

const mapState = ({students, campuses}) => ({students, campuses});

const mapDispatch = { deleteStudent };

export default connect(mapState, mapDispatch)(Students);
