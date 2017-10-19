import React from 'react';
import { connect } from 'react-redux';
import { editStudent } from '../reducers/students';

export function EditStudent(props) {
   let student = props.student
   let campuses = props.campuses
  return (
    <div>
    <h3>Edit Student</h3>
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

const mapState = ({students, campuses}) => ({students, campuses})
const mapDispatch = { editStudent };

export default connect(mapState, mapDispatch)(EditStudent);
