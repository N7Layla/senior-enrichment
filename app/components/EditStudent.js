import React, { Component } from 'react';
import { connect } from 'react-redux';
import { editStudent } from '../reducers/students';

export class EditStudent extends Component {
  render() {
   let student = this.props.student
   let campuses = this.props.campuses
  return (
    <div>
    <form
      id="edit-student-form"
      onSubmit={evt => {
      student.name = evt.target.name.value
      student.email = evt.target.email.value
      student.campusId = evt.target.campus.value
      this.props.editStudent(student.id, student)
      document.getElementById('edit-student-form').reset()}
    }>
      <label>Student Name: </label>
        <input required type="text" name="name" />
        <label>Student Email: </label>
        <input required type="text" name="email" />
        <label>Student Campus: </label>
        <select required name="campus">
        {
          campuses.map(campus =>
            <option key={campus.id} value={campus.id}>{campus.name}</option>
          )
        }
          </select>
       <input type="submit" value="Submit" />
    </form>
    </div>
  )
  }
}

const mapState = ({students, campuses}) => ({students, campuses})
const mapDispatch = { editStudent };

export default connect(mapState, mapDispatch)(EditStudent);
