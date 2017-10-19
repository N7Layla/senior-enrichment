import React, { Component } from 'react';
import { connect } from 'react-redux';
import { editCampus } from '../reducers/campuses';

export class EditCampus extends Component {
  render() {
   let campus = this.props.campus
  return (
    <div>
    <form
      id="edit-campus-form"
      onSubmit={evt => {
      evt.preventDefault()
      campus.name = evt.target.name.value
      campus.description = evt.target.description.value
      campus.image = evt.target.image.value
      this.props.editCampus(campus.id, campus)
      document.getElementById('edit-campus-form').reset()}
    }>
      <label>Campus Name: </label>
        <input required type="text" name="name" />
        <label>Campus Description: </label>
        <input required type="text" name="description" />
        <label>Campus Image: </label>
        <input type="text" name="image" />
       <input type="submit" value="Submit" />
    </form>
    </div>
  )
  }
}

const mapState = ({campuses}) => ({campuses})
const mapDispatch = { editCampus };

export default connect(mapState, mapDispatch)(EditCampus);