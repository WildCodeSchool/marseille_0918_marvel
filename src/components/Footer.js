import React, { Component } from 'react';
import Logo from './pictures/logo2.png';
import Facebook from './pictures/facebook.svg';
import Twitter from './pictures/twitter.svg';
import Instagram from './pictures/instagram.svg';
import './Footer.scss';


///////////////////////////////// CLASS FOOTER /////////////////////////////////


class Footer extends Component {
    render() {
        return (
        <div className="Foot">

            <a href="#">
                <img src={Logo} alt="Logo" className="LogoFooter" />
            </a>

            <p className="Copyright">
                Contact Us 
                <br/>
                About Us
                <br />
                Made by the X Wild Force ! ©
            </p>

            <div className="icons">
                <a href="http://facebook.com" target="_blank">
                    <img src={Facebook} className="iconFacebook" />
                </a>
                <a href="http://twitter.com" target="_blank">
                    <img src={Twitter} className="iconTwitter" />
                </a>
                <a href="http://instagram.com" target="_blank">
                    <img src={Instagram} className="iconInstagram" />
                </a>
            </div>
        </div>
        )
    }
}


export default Footer;