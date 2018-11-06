import React, { Component } from "react";
import Cards from "./Cards/Cards";
import filteredData from "./superFiltered.json";
import { NavLink } from "react-router-dom";
import NavBarHero from "../NavBarHero/NavBarHero";

class Indexx extends Component {
  constructor(props) {
    super(props);
    this.state = {
      elementMax: 20,
      tab: filteredData.filter((character, idx) => idx < 20)
    };
  }

  loadMore() {
    this.setState({ elementMax: this.state.elementMax + 20 });
    let newData = filteredData.filter(
      (character, idx) =>
        idx >= this.state.elementMax &&
        idx < this.state.elementMax + 20 &&
        idx < filteredData.length
    );
    this.setState({
      tab: [...this.state.tab, ...newData]
    });
  }

  loadFromC() {
    this.setState({
      tab: filteredData.filter((character, idx) => idx >= 0 && idx < 20)
    });
  }
  loadFromD() {
    this.setState({
      tab: filteredData.filter((character, idx) => idx > 152 && idx < 173),
      elementMax: 173
    });
  }

  loadFromI() {
    this.setState({
      tab: filteredData.filter((character, idx) => idx > 263 && idx < 284),
      elementMax: 284
    });
  }

  loadFromS() {
    this.setState({
      tab: filteredData.filter((character, idx) => idx > 430 && idx < 451),
      elementMax: 451
    });
  }

  render() {
    return (
      <div className="indexx">
        <NavBarHero />
        <div className="indexFilter">
          <p onClick={() => this.loadFromC()}>All of them</p>
          <p onClick={() => this.loadFromD()}>From D</p>
          <p onClick={() => this.loadFromI()}>From I</p>
          <p onClick={() => this.loadFromS()}>From S</p>
        </div>
        <Cards characters={this.state.tab} />
        <button
          onClick={() => {
            this.loadMore();
          }}
        >
          Load More
        </button>
        <NavLink className="link" to="/" onClick="/">
          back home{" "}
        </NavLink>
      </div>
    );
  }
}

export default Indexx;
