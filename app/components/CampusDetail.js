import React, { Component } from 'react';
import { connect } from 'react-redux';
import SingleCampus from './SingleCampus';

export class CampusDetail extends Component {
  render() {
  const paramId = this.props.match.params.id;
  //let campuses = this.props.campuses.filter(campus => campus.id === paramId)
  console.log("props=", this.props)
  return (
    <div>
    hi
    </div>
  )
  }
}

const mapState = ({ campuses }) => ({ campuses });
//const mapDispatch = {};

export default connect(mapState)(CampusDetail);
