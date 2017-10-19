import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <div className="nav">
      <div id="title">Margaret Hamilton Interplanetary Academy of JavaScript</div>
      <div id="links">
      <NavLink to="/campuses">Campuses</NavLink> / <NavLink to="/students">Students</NavLink></div>
      </div>
  )
}
