import React, { Component } from "react";
import Cards from "./Cards/Cards";
import filteredData from "./superFiltered.json";
import { NavLink } from "react-router-dom";
import NavBarHero from "../NavBarHero/NavBarHero";

class Indexx extends Component {
  state = {
    elementMax: 20,
    tab: filteredData.filter((character, idx) => idx < 20)
  };
  

  loadMore = () => {
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

  loadFromC = () => {
    this.setState({
      tab: filteredData.filter((character, idx) => idx >= 0 && idx < 20)
    });
  }
  loadFromD = () => {
    this.setState({
      tab: filteredData.filter((character, idx) => idx > 151 && idx < 172),
      elementMax: 172
    });
  }

  loadFromI = () => {
    this.setState({
      tab: filteredData.filter((character, idx) => idx > 260 && idx < 281),
      elementMax: 281
    });
  }

  loadFromS = () => {
    this.setState({
      tab: filteredData.filter((character, idx) => idx > 421 && idx < 442),
      elementMax: 442
    });
  }

  render() {

    const {
      loadFromC,
      loadFromD,
      loadFromI,
      loadFromS,
      loadMore,
      state:{
        tab
      }
    } = this;

    return (
      
      <div className="indexx">
        <NavBarHero />
        <div className="indexFilter">
          <p onClick={() => loadFromC()}>All of them</p>
          <p onClick={() => loadFromD()}>From D</p>
          <p onClick={() => loadFromI()}>From I</p>
          <p onClick={() => loadFromS()}>From S</p>
        </div>
        <Cards characters={tab} />
        <button
          onClick={() => {
            loadMore();
          }}
        >
          Load More
        </button>
        <NavLink className="link" to="/">
          back home{" "}
        </NavLink>
      </div>
    );
  }
}

export default Indexx;
