import React, { Component } from "react";
import "../App.scss";
import NavBar from './NavBar/NavBar'
import Slide from "./Slide/Slide";
import Menu from "./Menu/menu";
import CountdownSection from "./Countdown/CountdownSection";
import Article from "./article/Article";
import Footer from "./Footer/Footer";

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
