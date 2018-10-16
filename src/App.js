import React, { Component } from 'react';
import { Button } from 'reactstrap';
import './App.scss';
import NavBar from './components/NavBar/NavBar';
import Slide from './components/Slide/Slide';
import Menu from './components/Menu/menu';
import Countdown from './components/Countdown/CountdownSection';
import Footer from './components/Footer/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <NavBar/>
          <Slide/>
        </header>
        <Menu/>
        <section className="Countdown">
            <Countdown/>
        </section>
        <Footer/>
      </div>
    );
  }
}

export default App;