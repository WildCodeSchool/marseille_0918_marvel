import React from 'react';
import { NavLink } from 'react-router-dom';
import '../Versus.scss'
// Import Picture
import DCvsMarvel from './pictures/DCvsMarvel.jpg';

const DCversusMarvel = () => (
  <div className="vs">
    <div className="content">
      <h2>DC Comics versus Marvel</h2>
    </div>
    <img 
    src={DCvsMarvel}
    alt="DC Comics versus Marvel"
    className="picture_vs"
    />
    <NavLink className="link" to='/'> <i className="fas fa-undo"/> </NavLink>
  </div>
)

export default DCversusMarvel;