import React, { Component} from 'react';
import store from '../store';
import NewCampus from './NewCampus';

export default class Campuses extends Component {
  constructor() {
    super()
    this.state = store.getState()
  }

  componentDidMount () {
    this.unsubscribe = store.subscribe(() => this.setState(store.getState()));
  }

  componentWillUnmount () {
    this.unsubscribe();
  }

  render() {
    return (
      <div className="campusContainer">
      {
        this.state.campuses.map(campus =>
        (<div className="campus" key={campus.id}><h2>{campus.name}</h2>
        <hr />
        {campus.description}<br />
        <img width="100px" src={campus.image} /><br />
        Students:
        <ul className="campus-students">{
          this.state.students.map(student =>
            (campus.id === student.campusId ? <li key={student.id}>{student.name}</li> : '')
          )
        }</ul>
        </div>)
        )
      }
      <div className="addCampus"><NewCampus /></div>
      </div>
    )
  }
}
