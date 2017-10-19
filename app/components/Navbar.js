import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

export function Navbar() {
  return (
    <div className="nav">
      <div id="title">Margaret Hamilton Interplanetary Academy of JavaScript</div>
      <div id="links">
      <NavLink to="/campuses">Campuses</NavLink> / <NavLink to="/students">Students</NavLink></div>
      </div>
  )
}

export default withRouter(connect()(Navbar));
