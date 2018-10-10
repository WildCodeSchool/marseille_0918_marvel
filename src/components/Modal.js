import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import Search from './Search';
import searchLogo from './pictures/search-solid.svg';
import Cross from './pictures/times-solid.svg';
import './Modal.scss'

const customStyles = {
    content : {
        top                   : '35%',
        left                  : '50%',
        right                 : '50%',
        bottom                : 'auto',
        marginRight           : '-80%',
        transform             : 'translate(-50%, -50%)'
    }
};

class PopUp extends React.Component {
    constructor() {
        super();
        this.state = {
        modalIsOpen: false
        };
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    openModal() {
        this.setState({modalIsOpen: true});
    }

    closeModal() {
        this.setState({modalIsOpen: false});
    }

    render() {
        return (
            <div>
                <a href="#" onClick={this.openModal}>
                    <img src={searchLogo} alt="Search" className="Search"/>
                </a>

                <Modal
                    isOpen={this.state.modalIsOpen}
                    onRequestClose={this.closeModal}
                    style={customStyles}
                >

                    <a href="#" onClick={this.closeModal}><img src={Cross} alt="Close" className="Close" /></a>
                    <Search />

                </Modal>
            </div>
        );
    }
}

export default PopUp;