import React, { Component }  from 'react';
import './NavBar.scss';
import Modal from './Modal'
import Logo from './pictures/logo2.png';
import Home from './pictures/home-solid.svg';

import {
    Navbar,
    Nav,
    NavItem } from 'reactstrap';


//////////////////////////////CLASS NAVIGATION /////////////////////////////////


class Navigation extends Component {

    constructor(props) {
        super(props);

            this.toggle = this.toggle.bind(this);
            this.state = {
            isOpen: false
            };
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        return (
            <div>
                <Navbar expand="sm" className="contaner">  
                    <a href="#">                  
                        <img src={Logo} alt="Logo" className="LogoNav"/>
                    </a>   
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <a href="#">
                                <img src={Home} alt="Home" className="Home"/> 
                            </a>
                        </NavItem>
                        <NavItem>
                            <Modal />
                        </NavItem>
                    </Nav>                    
                </Navbar>
            </div>
        );
    }
}


export default Navigation;