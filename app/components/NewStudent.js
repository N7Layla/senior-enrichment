import React from 'react';
import { submitStudent } from '../reducers/students';
import { connect } from 'react-redux';

export function NewStudent(props) {
  return (
    <form
      id="add-student-form"
      onSubmit={evt => {
      evt.preventDefault()
      const student = {
        name: evt.target.name.value,
        email: evt.target.email.value,
        campusId: evt.target.campus.value
      }
      props.submitStudent(student)
      document.getElementById('add-student-form').reset()}
    }>
      <label>Student Name: </label>
        <input required type="text" name="name" />
        <label>Student Email: </label>
        <input required type="text" name="email" />
        <label>Student Campus: </label>
        <select required name="campus">
        {
          props.campuses.map(campus =>
            <option key={campus.id} value={campus.id}>{campus.name}</option>
          )
        }
          </select>
       <input type="submit" value="Submit" />
    </form>
  )
}

const mapProps = ({ campuses }) => ({ campuses });

const mapDispatch = { submitStudent };

export default connect(mapProps, mapDispatch)(NewStudent);
