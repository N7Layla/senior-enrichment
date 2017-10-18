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
        email: evt.target.email.value
      }
      props.submitStudent(student)
      document.getElementById('add-student-form').reset()}
    }>
      <label>Student Name: </label>
        <input type="text" name="name" />
        <label>Student Email: </label>
        <input type="text" name="email" />
       <input type="submit" value="Submit" />
    </form>
  )
}

const mapProps = null;

const mapDispatch = { submitStudent };

export default connect(mapProps, mapDispatch)(NewStudent);
