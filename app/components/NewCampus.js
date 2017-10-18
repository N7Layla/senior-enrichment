import React from 'react';
import { submitCampus } from '../reducers/campuses';
import { connect } from 'react-redux';
//import store from '../store';

export function NewCampus(props) {
  return (
    <form onSubmit={evt => {
      evt.preventDefault()
      const campus = {
        name: evt.target.name.value,
        description: evt.target.description.value,
        image: evt.target.image.value
      }
      props.submitCampus(campus)}
    }>
      <label>Campus Name: </label>
        <input type="text" name="name" />
        <label>Campus Description: </label>
        <input type="text" name="description" />
        <label>Campus Image: </label>
        <input type="text" name="image" />
       <input type="submit" value="Submit" />
    </form>
  )
}

const mapProps = null;

const mapDispatch = { submitCampus };

export default connect(mapProps, mapDispatch)(NewCampus);
