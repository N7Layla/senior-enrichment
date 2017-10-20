import React from 'react';
import { submitCampus } from '../reducers/campuses';
import { connect } from 'react-redux';

export function NewCampus(props) {
  return (
    <div className="form-style">
    <h2>Add A Campus</h2>
    <form
      id="add-campus-form"
      onSubmit={evt => {
      evt.preventDefault()
      const campus = {
        name: evt.target.name.value,
        description: evt.target.description.value,
        image: evt.target.image.value
      }
      props.submitCampus(campus)
      document.getElementById('add-campus-form').reset()}
    }>
      <label>Campus Name: </label>
        <input type="text" name="name" /><br />
        <label>Campus Description: </label>
        <input type="text" name="description" /><br />
        <label>Campus Image: </label>
        <input type="text" name="image" />
       <input type="submit" value="Submit" />
    </form>
    </div>
  )
}

const mapProps = null;

const mapDispatch = { submitCampus };

export default connect(mapProps, mapDispatch)(NewCampus);
