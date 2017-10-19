import React from 'react';
import { connect } from 'react-redux';
import { NavLink, withRouter } from 'react-router-dom';
import { deleteCampus } from '../reducers/campuses';
import { deleteStudent } from '../reducers/students';

export function SingleCampus(props) {
    const campus = props.campus;
    return (
    <div>
    <NavLink
      className="campus-link"
      to={`/campuses/${campus.id}`}><h2>{campus.name}</h2></NavLink>
        <hr />
    {campus.description}<br />
    <img width="100px" src={campus.image} />
     <button
        onClick={() => props.deleteCampus(campus.id)}
        className="btn btn-default">DELETE CAMPUS
       </button>
      </div>
    )
}

const mapState = ({ students, campuses }) => ({ students, campuses });

const mapDispatch = { deleteCampus, deleteStudent };

export default withRouter(connect(mapState, mapDispatch)(SingleCampus));
