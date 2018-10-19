import React, { Component } from "react";
import "./App.scss";
import NavBar from "./components/NavBar/NavBar";
import Slide from "./components/Slide/Slide";
import Menu from "./components/Menu/menu";
import CountdownSection from "./components/Countdown/CountdownSection";
import Footer from "./components/Footer/Footer";
import Article from "./components/article/Article";

import Background from "./bg.jpg";
import Hero from "./components/Hero_Page/Hero";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <NavBar />
          <Slide />
        </header>
        <Menu />
        <section className="Countdown">
          <CountdownSection />
        </section>
        <section className="Container-article">
          <Article />
        </section>
        <Footer />
      </div>
    );
  }
}

export default App;
