import React, { Component }  from 'react';
import './NavBar.scss';
import Modal from '../Modal/Modal'
import Logo from './pictures/logo.png';
import Home from './pictures/home-solid.svg';


//////////////////////////////CLASS NAVIGATION /////////////////////////////////


class Navigation extends Component {

    render() {
        return (
            <div className="Navbar">
                <a href="#">
                    <img src={Home} alt="Home" className="Home"/>
                    <br/>
                    <span className="LabelIcon">Home</span>
                </a>
                <img src={Logo} alt="Logo" className="LogoNav"/>
                <Modal/>
            </div>
        );
    }
}


export default Navigation;