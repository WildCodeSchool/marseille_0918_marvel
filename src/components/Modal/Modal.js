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
            <div className="SearchModal">
                <a onClick={this.openModal}> 
                    <img src={searchLogo} alt="Search" className="Search"/> 
                    <br/>
                    <span className="LabelIcon">Search</span>
                </a>

                <Modal
                    isOpen={this.state.modalIsOpen}
                    onRequestClose={this.closeModal}
                    style={customStyles}
                    id="Modal"
                >

                    <a href="#" onClick={this.closeModal} className="ButtonClose">
                        <img src={Cross} alt="Close" className="Close" />
                    </a>
                    {/* <Route path="/search" component={Search}/> */}
                    <Search />

                </Modal>
            </div>
        );
    }
}

export default PopUp;