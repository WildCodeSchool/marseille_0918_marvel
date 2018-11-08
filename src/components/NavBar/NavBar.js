import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.scss';

import Modal from '../Modal/Modal'
import Logo from './pictures/logo.png';
import Home from './pictures/home-solid.svg';


//////////////////////////////CLASS NAVIGATION /////////////////////////////////


const Navigation = () => (
  <div className="Navbar">
    <Link to="/">
      <img src={Home} alt="Home" className="Home"/>
      <br/>
      <span className="LabelIcon">Home</span>
    </Link>
    <Link to="/">
      <img src={Logo} alt="Logo" className="LogoNav"/>
    </Link>
    <Modal/>
  </div>
)

export default Navigation;