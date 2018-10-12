import React, { Component } from 'react';
import Facebook from './pictures/facebook.svg';
import Twitter from './pictures/twitter.svg';
import Instagram from './pictures/instagram.svg';
import FooterImg from './pictures/footer.png';
import './Footer.scss';


///////////////////////////////// CLASS FOOTER /////////////////////////////////


class Footer extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="Foot">

                    {/* <a href="#">
                        <img src={Logo} alt="Logo" className="LogoFooter" />
                    </a> */}

                    <p className="Copyright">
                        Contact Us 
                        <br/>
                        About Us
                        <br />
                        Made by the Wild Force ! ©
                    </p>

                    <div className="icons">
                        <a href="http://facebook.com" rel="noopener noreferrer" target="_blank">
                            <img src={Facebook} alt="Facebook" className="iconFacebook" />
                        </a>
                        <a href="http://twitter.com" rel="noopener noreferrer" target="_blank">
                            <img src={Twitter} alt="Twitter" className="iconTwitter" />
                        </a>
                        <a href="http://instagram.com" rel="noopener noreferrer" target="_blank">
                            <img src={Instagram} alt="Instagram" className="iconInstagram" />
                        </a>
                    </div>
                <img src={FooterImg} 
                alt="Background Footer" 
                className="footerImg"/>
                </div>
            </React.Fragment>
        )
    }
}


export default Footer;