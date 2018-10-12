import React, { Component } from 'react';
import { Button } from 'reactstrap';
import './App.scss';
import Slide from './components/Slide/Slide';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import CountdownSection from './components/Countdown/CountdownSection';
import Menu from './components/Menu/menu';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <NavBar/>
          <Slide/>
        </header>
        <Menu />
        <section className="Countdown">
            <CountdownSection />
        </section>
        <Footer/>
      </div>
    );
  }
}

export default App;