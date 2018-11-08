import React, { Component } from 'react';
import Facebook from './pictures/facebook.svg';
import Twitter from './pictures/twitter.svg';
import Instagram from './pictures/instagram.svg';
import FooterImg from './pictures/footer.png';
import './Footer.scss';


///////////////////////////////// CLASS FOOTER /////////////////////////////////

class Footer extends Component {
  state = {
    subscribed : false,
    button : "Subscribe"
  }
  subscribe = e => {
    let regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (regex.test(String(this.refs.searchBar.value).toLowerCase())) {
      this.setState({subscribed : true, button : "Sent !"})
    } else {
      alert("Your email is not valid !")
    }
  }

  render() {

    const { subscribe, state: { subscribed, button } } = this;
    let Bouton = 'btn btn-primary'

    if (subscribed) {
      Bouton = 'btn btn-success'
    }

    return (
      <React.Fragment>
        <div className="Foot">

          <p className="Copyright">

            <p className="newsletter">Newsletter</p>

            <input 
            type="email"
            ref="searchBar"
            className="form-control"
            placeholder="Email">
            </input>

            <button 
            type="submit"
            onClick={subscribe}
            className={Bouton}
            >{this.state.button}</button>

            <br/>

            <p className="made">Made by the Wild Force ! ©</p>

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