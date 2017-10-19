import React, { Component } from 'react';
import { connect } from 'react-redux';
import SingleCampus from './SingleCampus';
import EditCampus from './EditCampus';
import _ from 'lodash';

export class CampusDetail extends Component {
  render() {
  const paramId = this.props.match.params.id;
  //let campuses = this.props.campuses.filter(campus => campus.id === paramId)
  console.log("props=", this.props)
  console.log("campus=", this.props.campus)
  const campus = this.props.campus;
  return (
    <div className="single-campus">
    <SingleCampus campus={campus} />
    <EditCampus campus={campus} />
    <ul className="campus-students">{
    //   props.students.map(student =>
    //     (campus.id === student.campusId ? <li key={student.id}>{student.name}</li> : '')
    //   )
    }</ul>
    </div>
  )
  }
}

//const mapState = ({ campuses }) => ({ campuses });
//const mapDispatch = {};

const mapState = ({campuses}, ownProps) => {
  const paramId = Number(ownProps.match.params.id);
  return {
    campus: _.find(campuses, campus => campus.id === paramId) || {name: '', description: '', image: ''}
  }
}

export default connect(mapState)(CampusDetail);
