import React from 'react';
import { connect } from 'react-redux';
import SingleCampus from './SingleCampus';
import EditCampus from './EditCampus';
import _ from 'lodash';

export function CampusDetail(props) {

  //let campuses = this.props.campuses.filter(campus => campus.id === paramId)
  const campus = props.campus;
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

const mapState = ({campuses}, ownProps) => {
  const paramId = Number(ownProps.match.params.id);
  return {
    campus: _.find(campuses, campus => campus.id === paramId) || {name: '', description: '', image: ''}
  }
}

export default connect(mapState)(CampusDetail);
