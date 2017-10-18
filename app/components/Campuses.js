import React, { Component} from 'react';
import store from '../store';
import NewCampus from './NewCampus';
import { NavLink } from 'react-router-dom';

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
      <div>
        <div className="addCampus"><NewCampus /></div>
          <div className="campusContainer">
          {
            this.state.campuses.map(campus =>
            (<div className="campus" key={campus.id}>
             <NavLink
            className="campus-link"
            activeClassName="active"
            to={`/campuses/${campus.id}`}><h2>{campus.name}</h2></NavLink>
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
          </div>
        </div>
    )
  }
}
