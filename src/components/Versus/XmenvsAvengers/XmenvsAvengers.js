import React from 'react';
import { NavLink } from 'react-router-dom';
import '../Versus.scss'
// Import Picture
import XmenvsAvengers from './pictures/XmenvsAvengers.jpg';

const DCversusMarvel = () => (
  <div className="vs">
    <div className="content">
      <h2>X-Men versus Avengers</h2>
    </div>
    <img 
    src={XmenvsAvengers}
    alt="X-Men versus Avengers"
    className="picture_vs"
    />
    <NavLink className="link" to='/'> <i className="fas fa-undo"/> </NavLink>
  </div>
)

export default DCversusMarvel;