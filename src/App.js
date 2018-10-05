import React, { Component } from 'react';
import { Button } from 'reactstrap';
import './App.scss';
import Carousel from './components/Carousel';
import NavBar from './components/NavBar';
import CountdownSection from './components/CountdownSection';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <NavBar />
          <Carousel />
        </header>
        <section>
          <div>
            <CountdownSection />
          </div>
        </section>
        <Footer />
      </div>
    );
  }
}

export default App;