import React, { Component }  from 'react';
import './NavBar.scss';
import Logo from './pictures/logo2.png';
import Home from './pictures/home-solid.svg';
import Search from './pictures/search-solid.svg';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem } from 'reactstrap';


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
                <Navbar color="light" light expand="sm" className="contaner">  
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
                            <a href="#">
                                <img src={Search} alt="Search" className="Search"/>
                            </a>
                        </NavItem>
                    </Nav>                    
                </Navbar>
            </div>
        );
    }
}


export default Navigation;