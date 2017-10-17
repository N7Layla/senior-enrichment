import React, { Component} from 'react';
import store from '../store';

export default class Students extends Component {
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
     <section id="studentsContainer">
      <h2>Students:</h2>
      {
        this.state.students.map(student =>
        (<div key={student.id}>
        <div className="student-info">
        <h3 className="student-name">{student.name}</h3>
        <p className="student-email">{student.email}</p>
        <p className="student-campus">{
          this.state.campuses.map(campus =>
            (campus.id === student.campusId ? campus.name : '')
          )
        }</p>
        </div></div>)
        )
      }
     </section>
    )
  }
}
