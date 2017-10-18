import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

export function SingleCampus(props) {
  const { campus } = props;
  console.log(campus)
  return (
    <h1>{campus.name}</h1>
  )
}

const mapState = ({campuses}, ownProps) => {
  const paramId = Number(ownProps.match.params.id);
  return {
    campus: _.find(campuses, campus => campus.id === paramId)
  }
}

//const mapDispatch = null;

export default connect(mapState)(SingleCampus);
