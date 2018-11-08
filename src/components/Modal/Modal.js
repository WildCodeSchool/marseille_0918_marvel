import React from 'react';
import Modal from 'react-modal';
import Search from '../Search/Search';
import searchLogo from './pictures/search-solid.svg';
import Cross from './pictures/times-solid.svg';
import './Modal.scss'


//////////////////////////////////////// STYLE /////////////////////////////////


const customStyles = {
  content : {
    left                  : '50%',
    right                 : '50%',
    bottom                : '-21%',
    marginRight           : '-80%',
    transform             : 'translate(-50%, -50%)'
  }
};


//////////////////////////////////////// CLASS /////////////////////////////////


class PopUp extends React.Component {
  state = {
    modalIsOpen: false
  };
  

  openModal = () => this.setState({modalIsOpen: true});

  closeModal = () => this.setState({modalIsOpen: false});

  render() {
    const {
      openModal,
      closeModal,
      state:{
        modalIsOpen
      }
    } = this;
    return (
      <div className="SearchModal">
        <a onClick={openModal}> 
          <img src={searchLogo} alt="Search" className="Search"/> 
          <br/>
          <span className="LabelIcon">Search</span>
        </a>

        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          id="Modal"
        >

          <a href="#" onClick={closeModal} className="ButtonClose">
            <img src={Cross} alt="Close" className="Close" />
          </a>
          <Search/>

        </Modal>
      </div>
    );
  }
}

export default PopUp;