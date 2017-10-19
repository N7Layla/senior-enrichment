import React from 'react';
import { connect } from 'react-redux';
import NewCampus from './NewCampus';
import SingleCampus from './SingleCampus';

export function Campuses(props) {
    return (
      <div>
        <div className="addCampus"><NewCampus /></div>
          <div className="campusContainer">
          {
            props.campuses.map(campus =>
            (<div className="campus" key={campus.id}>
              <SingleCampus campus={campus} students={props.students} />
            </div>)
            )
          }
          </div>
        </div>
    )
}

const mapState = ({ campuses, students }) => ({ campuses, students });

const mapDispatch = {}

export default connect(mapState, mapDispatch)(Campuses);
