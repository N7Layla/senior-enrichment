import React, { Component } from 'react';
//import store from '../store';

export default class NewCampus extends Component {
  render() {
  return (
    <form onSubmit={evt => {
      evt.preventDefault()
      this.props.submitCampus(evt.target.value)}
    }>
      <label>Campus Name: </label>
        <input type="text" name="name" />
        <label>Campus Description: </label>
        <input type="text" name="description" />
        <label>Campus Image: </label>
        <input type="text" name="image" />
       <input type="submit" value="Submit" />
    </form>
  )}
}
