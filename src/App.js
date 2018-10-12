import React, { Component } from 'react';
import { Button } from 'reactstrap';
import './App.scss';
import Slide from './components/Slide/Slide';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <NavBar/>
          <Slide/>
        </header>
        <Footer/>
      </div>
    );
  }
}

export default App;